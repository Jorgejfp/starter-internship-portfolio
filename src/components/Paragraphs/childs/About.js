import React, {useCallback, useEffect, useRef} from "react";
import {languagesProficiency} from "../../../data/languagesProficiency";

const About = () => {

    const barsRef = useRef([]); // Ref para las barras de progreso
    const percentageLabelsRef = useRef([]); // Ref para los porcentajes
    let globalIndex = 0; // Controla los índices de los elementos observados
    const animatedBars = useRef(new Set()); // Controla cuáles barras ya han sido animadas

    // Función para animar las barras de progreso
    const move = useCallback((elem, labelElem, proficiency) => {
        let width = 0;

        function frame() {
            if (width >= proficiency) {
                return;
            }
            width++;
            elem.style.width = width + "%";
            labelElem.innerText = width + "%";
            requestAnimationFrame(frame);
        }

        frame();
    }, []);

    // Hook de efecto para observar las barras de progreso
    useEffect(() => {
        barsRef.current.forEach((bar, index) => {
            if (bar) { // Verificamos que el elemento exista
                const observer = new IntersectionObserver(
                    (entries) => {
                        if (entries[0].isIntersecting && !animatedBars.current.has(bar)) {
                            move(bar, percentageLabelsRef.current[index], languagesProficiency[index].proficiency);
                            animatedBars.current.add(bar);
                        }
                    },
                    {
                        root: null,
                        rootMargin: "0px",
                        threshold: 0.1, // Activa la animación cuando el 10% del elemento es visible
                    }
                );

                observer.observe(bar); // Observa el elemento bar

                // Cleanup para eliminar el observador
                return () => {
                    if (bar) {
                        observer.unobserve(bar);
                    }
                };
            }
        });
    }, [move]);

    // Agrupar las habilidades por categoría
    const groupedByCategory = languagesProficiency.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <>
            <p><strong>Jeune diplômé</strong> en programmation et analyse informatique, passionné par l'analyse de données, la visualisation et le développement de logiciels. Je cherche à intégrer une <strong>équipe dynamique</strong> où je pourrais appliquer mes compétences en <strong>développement web</strong> et en <strong>intelligence d'affaires</strong>. Fort de mon expérience en comptabilité et en gestion, je combine des compétences en <strong>analyse de données</strong> avec la capacité de comprendre les besoins métiers pour créer des <strong>solutions orientées vers la prise de décision</strong>.</p>

            <h3 style={{padding: "20px"}}>Maîtrise des compétences linguistiques</h3>
            <div className="gridAbout">
                {Object.keys(groupedByCategory).map(category => (
                    <div key={category} className="categorySection">
                        <h4 className="categoryTitle">{category}</h4>
                        {groupedByCategory[category].map((language, index) => (
                            <div key={index} className="progressContainer">
                                <div className="spanWrapper">
                                    <span>{language.lang}</span> <span
                                    ref={el => percentageLabelsRef.current[globalIndex] = el}>0%</span>
                                </div>
                                <div className="myProgress">
                                    <div className="myBar" ref={el => barsRef.current[globalIndex++] = el}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}

export default About;
