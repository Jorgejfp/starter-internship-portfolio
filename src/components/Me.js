import React from "react";
import meImageNoBg from "../assets/me-nobg.png"; // Asegúrate de tener la imagen correcta de tu perfil

const Me = () => {
    return (
        <>
            <img src={meImageNoBg} alt="Jorge Flores" className="mypic" />
            <h1>Jorge Flores</h1>
            <h3>Développeur Junior <br/> Analyste de Données</h3>
        </>
    );
}

export default Me;
