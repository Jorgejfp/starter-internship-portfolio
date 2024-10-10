import React from "react";
import WorkIcon from '@mui/icons-material/Work'; // Icono para ocupación
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Icono para localización
import EmailIcon from '@mui/icons-material/Email'; // Icono para correo electrónico
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Icono de LinkedIn

const AboutMe = () => {
    const email = 'jorgejfp@hotmail.com';
    const linkedinUrl = 'https://www.linkedin.com/in/jjfp'; // Enlace a tu LinkedIn

    const mailTo = () => {
        return <a href={`mailto:${email}`}>{email}</a>;
    };

    const gridContent = [
        {label: 'Localisation', content: 'Montréal, Canada', img: <LocationOnIcon style={{ fontSize: 24 }} />}, // Icono de 24px
        {label: 'Occupation', content: 'Programmeur-analyste', img: <WorkIcon style={{ fontSize: 24 }} />}, // Icono de 24px
        {label: 'LinkedIn', content: <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">Mon profil LinkedIn</a>, img: <LinkedInIcon style={{ fontSize: 24, color: '#0A66C2' }} />}, // Icono de 24px
        {label: 'Courriel', content: mailTo(), img: <EmailIcon style={{ fontSize: 24 }} />}, // Icono de 24px
    ];

    return (
        <>
            <div className="gridHome">
                {gridContent.map((gridElement, index) => (
                    <div key={index} className="gridHomeElement">
                        <div>
                            {gridElement.img}
                            <div>
                                <div>{gridElement.label} : {gridElement.content}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="justifiedText">
                <h3>Salut !</h3> {/* Cambiado el título a "À propos de moi" */}
                <p>Je m'appelle Jorge Flores, et je suis un programmeur-analyste diplômé du Collège LaSalle à Montréal, Canada. Je suis passionné par le développement de solutions numériques et j'ai une solide expérience dans la gestion, la comptabilité, et le développement web.</p>
                <p>Mon parcours m'a permis d'acquérir des compétences en développement frontend et backend, notamment en HTML, CSS, JavaScript, React, Node.js et SQL. J'aime également travailler avec des outils tels que Power BI pour l'analyse des données.</p>
                <p>Tout au long de ma carrière, j'ai démontré ma capacité à travailler efficacement en équipe, à gérer des projets complexes et à proposer des solutions créatives. Mon objectif est de continuer à apprendre et à contribuer à des projets innovants.</p>
                <p>Dans mes temps libres, je m'intéresse à la lecture et à la natation, et j'aime également améliorer mes compétences en analyse des données, en particulier dans le domaine de Power BI, où je souhaite me spécialiser en tant qu'analyste de données et développeur Power BI.</p>

                <br/><br/>
                <h3>Études</h3> 
                <table>
                    <thead>
                        <tr>
                            <th>Carrière</th>
                            <th>Institution</th>
                            <th>Années</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>AEC – Informatique Programmeur-analyste</td>
                            <td>Collège LaSalle, Montréal, QC</td>
                            <td>2023-2024</td>
                        </tr>
                        <tr>
                            <td>Docteur en gestion stratégique des affaires</td>
                            <td>Université Pontificale Catholique du Pérou –, Lima, Pérou</td>
                            <td>2017-2023</td>
                        </tr>
                        <tr>
                            <td>Maîtrise en administration stratégique des affaires</td>
                            <td>Université Pontificale Catholique du Pérou , Lima, Pérou</td>
                            <td>2009-2012</td>
                        </tr>
                        <tr>
                            <td>Deuxième spécialité en gestion financière et Gestion des risques</td>
                            <td>Université Nationale de San Agustín, Arequipa, Pérou</td>
                            <td>2006-2007</td>
                        </tr>
                        <tr>
                            <td>Titre professionnel Comptable public</td>
                            <td>Université catholique de Santa Maria, Arequipa, Pérou</td>
                            <td>1999–2003</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AboutMe;
