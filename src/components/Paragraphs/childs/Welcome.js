import css3Image from '../../../assets/technologyLogos/css-3.png';
import gitImage from '../../../assets/technologyLogos/git.png';
import gitHubImage from '../../../assets/technologyLogos/github.png';
import html5Image from '../../../assets/technologyLogos/html5.png';
import javascriptImage from '../../../assets/technologyLogos/javascript.png';
import laravelImage from '../../../assets/technologyLogos/laravel.png';
import mysqlImage from '../../../assets/technologyLogos/mysql.png';
import nodejsImage from '../../../assets/technologyLogos/nodejs.png';
import npmImage from '../../../assets/technologyLogos/npm.png';
import phpImage from '../../../assets/technologyLogos/php.png';
import phpstormImage from '../../../assets/technologyLogos/phpstorm.png';
import reactImage from '../../../assets/technologyLogos/react.png';
import sqlImage from '../../../assets/technologyLogos/sql.png';
import symfonyImage from '../../../assets/technologyLogos/symfony.png';
import typescriptImage from '../../../assets/technologyLogos/typescript.png';
import xamppImage from '../../../assets/technologyLogos/xampp.png';
import yarnImage from '../../../assets/technologyLogos/yarn.png';
import powerbiImage from '../../../assets/technologyLogos/power-bi.png'; // Nueva imagen de Power BI
import Me from "../../Me";

const Welcome = () => {
    const images = [
        css3Image, gitImage, gitHubImage, html5Image, javascriptImage, laravelImage, mysqlImage,
        nodejsImage, npmImage, phpImage, reactImage, sqlImage,
        typescriptImage, xamppImage, yarnImage, powerbiImage // Agregamos Power BI aquí
    ];

    return (
        <>
            <div className="meWelcome">
                <Me />
            </div>
            <h1>Bonjour!</h1>
            <h2>Je m'appelle Jorge Flores</h2>
            <h4>Développeur junior et analyste de données en formation</h4>
            <h4>Passionné par le développement web et l'intelligence d'affaires</h4>
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>
            <div className="wave wave5"></div>
            <div className="slider">
                <div className="slideTrack">
                    {images.map((image, index) => (
                        <img className="slide" src={image} alt={`tech-logo-${index}`} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Welcome;
