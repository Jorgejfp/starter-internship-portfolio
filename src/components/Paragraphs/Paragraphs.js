import React, { useRef, memo } from "react";
import Footer from "../Footer";

const Paragraphs = (props) => {
    const ref = useRef(null);

    return (
        <div className="containerParagraphs">
            <div className="paragraphs">
                {props.sectionsData.map((sectionData, index) => (
                    <div className={`containerParagraph`} key={sectionData.id} >
                        <span ref={ref} id={sectionData.title.toLowerCase()} style={{fontSize: "0.5rem"}}>{sectionData.title}</span>
                        <section className={`paragraph${sectionData.id === "welcome" ? 'welcome' : ""}`}>
                            <h1 ref={ref} id={sectionData.title.toLowerCase()}>{sectionData.title}</h1>
                            {sectionData.content}
                        </section>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(Paragraphs);