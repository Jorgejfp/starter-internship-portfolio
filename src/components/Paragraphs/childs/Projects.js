import React, { useState, useEffect } from "react";
import CardProject from "./CardProject"; // El componente que muestra los proyectos

const Projects = () => {
    const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);
    const [projects, setProjects] = useState([]); // Estado para almacenar los proyectos
    const [isLoading, setIsLoading] = useState(true); // Estado para la carga
    const [error, setError] = useState(null); // Estado para manejar errores

    // Función para obtener los repositorios desde la API de GitHub
    const fetchGitHubRepos = async () => {
        try {
            const response = await fetch("https://api.github.com/users/jorgejfp/repos"); // Reemplaza con tu usuario
            if (!response.ok) {
                throw new Error(`Error fetching repos: ${response.status}`);
            }
            const data = await response.json();
            setProjects(data);
            setIsLoading(false); // Ya hemos terminado de cargar
        } catch (error) {
            setError(error.message);
            setIsLoading(false); // Ya hemos terminado de intentar cargar
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
                {isLoading && <p>Chargement des projets...</p>} {/* Mensaje mientras carga */}
                {error && <p>Erreur lors du chargement: {error}</p>} {/* Muestra el error si ocurre */}
                {!isLoading && !error && (
                    <ul className="project-list">
                        {projects.map((project, index) => (
                            <li className="project-item" style={{ listStyle: "none" }} key={project.id}>
                                <CardProject
                                    projectData={{
                                        title: project.name,
                                        description: project.description || "Aucune description disponible",
                                        technologies: ["GitHub", "API"], // Puedes personalizar esto
                                        gitHub: project.html_url,
                                        link: project.homepage || null, // Enlace al sitio web del proyecto si existe
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
