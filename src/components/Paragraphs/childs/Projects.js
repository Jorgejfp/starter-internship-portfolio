import React, { useState, useEffect } from "react";
import CardProject from "./CardProject";

// Función para obtener la imagen del README.md
const extractImageFromMarkdown = (markdown) => {
    const imageRegex = /!\[.*?\]\((.*?)\)/;
    const match = imageRegex.exec(markdown);
    return match ? match[1] : null;
};

const Projects = () => {
    const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Función para obtener el README.md de un repositorio específico y extraer la imagen
    const fetchRepoReadme = async (repoName) => {
        try {
            const response = await fetch(`https://api.github.com/repos/jorgejfp/${repoName}/readme`);
            if (!response.ok) throw new Error(`No se pudo obtener el README.md: ${response.status}`);
            
            const data = await response.json();
            const markdownContent = atob(data.content);  // Decodifica el contenido base64 del README.md
            const imageUrl = extractImageFromMarkdown(markdownContent);  // Extrae la imagen del Markdown
            return imageUrl;
        } catch (error) {
            console.error(error);
            return null;  // Si no se encuentra imagen, devuelve null
        }
    };

    // Función para obtener los lenguajes del repositorio
    const fetchRepoLanguages = async (repoName) => {
        try {
            const response = await fetch(`https://api.github.com/repos/jorgejfp/${repoName}/languages`);
            if (!response.ok) throw new Error(`No se pudieron cargar los lenguajes: ${response.status}`);
            
            const languages = await response.json();  // Obtiene los lenguajes como objeto
            const totalBytes = Object.values(languages).reduce((a, b) => a + b, 0);  // Sumar los bytes totales
            
            // Calcular el porcentaje para cada lenguaje
            const languagePercentages = Object.keys(languages).map((lang) => ({
                name: lang,
                percentage: ((languages[lang] / totalBytes) * 100).toFixed(1)  // Calcular porcentaje y redondear
            }));
            return languagePercentages;
        } catch (error) {
            console.error(error);
            return [{ name: "Lenguajes no detectados", percentage: 0 }];
        }
    };

    const fetchGitHubRepos = async () => {
        try {
            const response = await fetch("https://api.github.com/users/jorgejfp/repos");
            if (!response.ok) throw new Error(`Error fetching repos: ${response.status}`);
            
            const repos = await response.json();
            
            const enhancedProjects = await Promise.all(repos.map(async (repo) => {
                const imageUrl = await fetchRepoReadme(repo.name);  // Obtener la imagen del README.md
                const languages = await fetchRepoLanguages(repo.name);  // Obtener lenguajes con porcentajes
                
                return {
                    ...repo,
                    img: imageUrl || `https://via.placeholder.com/300`,  // Usa la imagen del README.md o un placeholder
                    languages,  // Añadir lenguajes obtenidos con porcentajes
                };
            }));

            setProjects(enhancedProjects);
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchGitHubRepos();
    }, []);

    const handleToggleExpansion = (index) => {
        setExpandedProjectIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleBackdropClick = () => {
        setExpandedProjectIndex(null);
    };

    return (
        <>
            {expandedProjectIndex !== null && <div className="project-backdrop" onClick={handleBackdropClick}></div>}

            <div className="projects" data-page="projects">
                <h1 className="section-title">Mes Projets GitHub</h1>
                {isLoading && <p>Chargement des projets...</p>}
                {error && <p>Erreur lors du chargement: {error}</p>}
                {!isLoading && !error && (
                    <ul className="project-list">
                        {projects.map((project, index) => (
                            <li className="project-item" style={{ listStyle: "none" }} key={project.id}>
                                <CardProject
                                    projectData={{
                                        title: project.name,
                                        description: project.description || "Aucune description disponible",
                                        img: project.img,  // Imagen obtenida del README.md
                                        languages: project.languages,  // Lenguajes obtenidos de la API con porcentajes
                                        gitHub: project.html_url,
                                        link: project.homepage || null,
                                    }}
                                    isExpanded={expandedProjectIndex === index}
                                    onToggleExpansion={() => handleToggleExpansion(index)}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Projects;
