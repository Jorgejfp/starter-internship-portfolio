import { ReactComponent as HomeImg } from "../assets/house-solid.svg";
import { ReactComponent as AboutImg } from "../assets/user-solid.svg";
import { ReactComponent as ProjectImg } from "../assets/diagram-project-solid.svg";
import { ReactComponent as ContactImg } from "../assets/address-book-solid.svg";
import Home from "../components/Paragraphs/childs/Home.js";
import About from "../components/Paragraphs/childs/About";
import Contact from "../components/Paragraphs/childs/Contact";
import Projects from "../components/Paragraphs/childs/Projects";
import Welcome from "../components/Paragraphs/childs/Welcome";

export const sectionsData = [
    {id: "welcome", title: "" , description: "section de bienvenue", icon: " ", content: <Welcome />},
    {id: "home", title: "Accueil", description: "présente un peu à propos de moi", icon: <HomeImg className="desktopListImg" />, content: <Home />},
    {id: "about", title: "À propos", description: "affiche les compétences que j'ai développées au fil du temps", icon: <AboutImg className="desktopListImg" />, content: <About />},
    {id: "projects", title: "Projets", description: "contient des liens vers mes projets", icon: <ProjectImg className="desktopListImg" />, content: <Projects />},
    // {id: "more", title: "Plus", description: "montre ce qui m'intéresse encore", icon: <MoreImg className="desktopListImg" />, content: <More />},
    {id: "contact", title: "Contact", description: "pour me contacter", icon: <ContactImg className="desktopListImg" />, content: <Contact />},
];
