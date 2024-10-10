import { ReactComponent as GitHub } from "../assets/contatLogos/github_logo.svg"; // Ruta corregida
import { ReactComponent as Linkedin } from "../assets/contatLogos/linkedin_logo.svg"; // Ruta corregida
import { ReactComponent as Orcid } from "../assets/contatLogos/orcid_logo.svg"; // Ruta corregida
import { ReactComponent as Docker } from "../assets/contatLogos/docker_logo.svg"; // Ruta corregida
import { ReactComponent as WhatsApp } from "../assets/contatLogos/whatsapp_logo.svg"; // Ruta corregida

export const socialsData = [
    { text: "GitHub", icon: <GitHub className="socialImg" />, link: "https://github.com/jorgejfp" },
    { text: "LinkedIn", icon: <Linkedin className="socialImg" />, link: "https://www.linkedin.com/in/jjfp" },
    { text: "ORCID", icon: <Orcid className="socialImg" />, link: "https://orcid.org/0000-0002-1140-8074" },
    /*{ text: "Docker Hub", icon: <Docker className="socialImg" />, link: "https://hub.docker.com/u/jorgejfp" },
    { text: "WhatsApp", icon: <WhatsApp className="socialImg" />, link: `https://wa.me/+15147261846` } // Enlace directo a WhatsApp*/
];
