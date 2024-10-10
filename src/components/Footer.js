import React, { useContext } from "react";
import { ThemeContext } from "../App";

function Footer() {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`foot ${theme}`}>
            <p>Jorge Flores&copy; {new Date().getFullYear()}</p>
            <p>Développé avec React & PhpStorm</p>
            
        </div>
    );

}

export default Footer;
