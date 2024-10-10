import React, { memo } from "react";
import { ReactComponent as GitHub } from "../../../assets/github.svg";

const languageColors = {
    "JavaScript": "#f1e05a",
    "HTML": "#e34c26",
    "CSS": "#563d7c",
    "Shell": "#89e051",
    "Dockerfile": "#384d54",
    // Agrega más lenguajes con sus respectivos colores
};

const CardProject = ({ projectData: { link, img, title, description, languages, gitHub }, isExpanded, onToggleExpansion }) => {
    const [isImageLoaded, setImageLoaded] = React.useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageLoaded(true);  // Asegúrate de ocultar el spinner incluso si la imagen falla
    };

    const handleGitHubClick = () => {
        if (typeof gtag === 'function') {
            gtag('event', 'github_click', {
                event_category: 'Project',
                event_label: title,
                action_type: 'GitHub',
                value: 1
            });
        } else {
            console.warn('Google Analytics is not loaded yet.');
        }
    };

    const handlePreviewClick = () => {
        if (typeof gtag === 'function') {
            gtag('event', 'preview_click', {
                event_category: 'Project',
                event_label: title,
                action_type: 'Preview Project',
                value: 1
            });
        } else {
            console.warn('Google Analytics is not loaded yet.');
        }
    };

    return (
        <>
            {isExpanded ? (
                <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                    <h3 className="project-title">{title}</h3>
                    
                    <div className="project-content">
                        <div className="project-img-wrapper">
                            <a href={link} target="_blank" rel="noopener noreferrer" className="project-img-container">
                                {!isImageLoaded && <div className="spinner"></div>}
                                <img
                                    src={img}
                                    className="project-img-expanded"
                                    alt={title}
                                    loading="lazy"
                                    onLoad={handleImageLoad}
                                    onError={handleImageError}
                                    style={{ opacity: isImageLoaded ? 1 : 0 }}
                                />
                            </a>
                        </div>

                        {/* Sección de botones y lenguajes */}
                        <div className="project-buttons-languages">
                            <div className="project-buttons">
                                {link && (
                                    <a href={link} target="_blank" rel="noopener noreferrer" onClick={handlePreviewClick}>
                                        Preview Project
                                    </a>
                                )}
                                <a href={gitHub} target="_blank" rel="noopener noreferrer" onClick={handleGitHubClick}>
                                    <GitHub className="socialImg" /> GitHub
                                </a>
                            </div>

                            {/* Lenguajes Utilizados */}
                            <div className="languages-container">
                                <div className="language-bar-group">
                                    {languages.map((lang, index) => (
                                        <div 
                                            key={index} 
                                            className="language-bar" 
                                            style={{
                                                width: `${lang.percentage}%`,
                                                backgroundColor: languageColors[lang.name] || "#000"
                                            }}
                                        >
                                        </div>
                                    ))}
                                </div>
                                <div className="language-legend">
                                    {languages.map((lang, index) => (
                                        <div key={index} className="language-legend-item">
                                            <span 
                                                className="legend-color" 
                                                style={{ backgroundColor: languageColors[lang.name] || "#000" }}
                                            ></span>
                                            <span>{lang.name} {lang.percentage}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="project-description">{description}</p>
                    <button onClick={onToggleExpansion} className="expand-button"></button>
                </div>
            ) : (
                <div className="project-card">
                    <div className="project-header">
                        <h3 className="project-title">{title}</h3>
                    </div>

                    <div className="project-image-wrapper">
                        {!isImageLoaded && <div className="spinner"></div>}
                        <img
                            src={img}
                            className="project-img"
                            alt={title}
                            loading="lazy"
                            onClick={onToggleExpansion}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            style={{ opacity: isImageLoaded ? 1 : 0 }}
                        />
                    </div>

                    {/* Sección de botones y lenguajes */}
                    <div className="project-buttons-languages">
                        <div className="project-buttons">
                            <a href={gitHub} target="_blank" rel="noopener noreferrer" onClick={handleGitHubClick}>
                                <GitHub className="socialImg" /> GitHub
                            </a>
                            {link && (
                                <a href={link} target="_blank" rel="noopener noreferrer" onClick={handlePreviewClick}>
                                    Preview Project
                                </a>
                            )}
                        </div>

                        {/* Lenguajes Utilizados */}
                        <div className="languages-container">
                            <div className="language-bar-group">
                                {languages.map((lang, index) => (
                                    <div 
                                        key={index} 
                                        className="language-bar" 
                                        style={{
                                            width: `${lang.percentage}%`,
                                            backgroundColor: languageColors[lang.name] || "#000"
                                        }}
                                    >
                                    </div>
                                ))}
                            </div>
                            <div className="language-legend">
                                {languages.map((lang, index) => (
                                    <div key={index} className="language-legend-item">
                                        <span 
                                            className="legend-color" 
                                            style={{ backgroundColor: languageColors[lang.name] || "#000" }}
                                        ></span>
                                        <span>{lang.name} {lang.percentage}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="project-description">{description}</p>
                </div>
            )}
        </>
    );
};

export default memo(CardProject);
