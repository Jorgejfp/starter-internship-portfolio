import React, { useState } from 'react';
import { ReactComponent as GitHubLogo } from '../../../assets/contatLogos/github_logo.svg';
import { ReactComponent as LinkedInLogo } from '../../../assets/contatLogos/linkedin_logo.svg';
import { ReactComponent as DockerLogo } from '../../../assets/contatLogos/docker_logo.svg';
import { ReactComponent as OrcidLogo } from '../../../assets/contatLogos/orcid_logo.svg';
import { ReactComponent as WhatsAppLogo } from '../../../assets/contatLogos/whatsapp_logo.svg';
import { ReactComponent as CopyLogo } from "../../../assets/contatLogos/copy.svg";

const Contact = () => {
    const [showFeedback, setShowFeedback] = useState(false);

    const email = 'jorgejfp@hotmail.com';
    const whatsappNumber = '+15147261846'; 

    const mailTo = () => {
        return <a href={`mailto:${email}`}>{email}</a>;
    };

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email);
        setShowFeedback(true);
        setTimeout(() => {
            setShowFeedback(false);
        }, 3000);
    };

    return (
        <div className="contact">
            <label>Courriel </label>
            <div className="email-section">
                <div className="email-container">
                    {showFeedback ? <p className="feedback">Courriel copié dans le presse-papiers!</p> :
                    <p>{mailTo()}</p>}
                    <button onClick={copyEmailToClipboard} className="copyLogoButton">
                        <CopyLogo />
                    </button>
                </div>
            </div>
            <label>Réseaux sociaux</label>
            <div className="socials-section">
                <a href="https://github.com/jorgejfp" target="_blank" rel="noopener noreferrer" className="social-link">
                    <GitHubLogo className="social-icon" />
                    <p className="social-text">GitHub</p>
                </a>
                <a href="https://www.linkedin.com/in/jjfp" target="_blank" rel="noopener noreferrer" className="social-link">
                    <LinkedInLogo className="social-icon" />
                    <p className="social-text">LinkedIn</p>
                </a>
                <a href="https://orcid.org/0000-0002-1140-8074" target="_blank" rel="noopener noreferrer" className="social-link">
                    <OrcidLogo className="social-icon" />
                    <p className="social-text">ORCID</p>
                </a>
                <a href="https://hub.docker.com/u/jorgejfp" target="_blank" rel="noopener noreferrer" className="social-link">
                    <DockerLogo className="social-icon" />
                    <p className="social-text">Docker Hub</p>
                </a>
                {/*<a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="social-link">
                    <WhatsAppLogo className="social-icon" />
                    <p className="social-text">WhatsApp</p>
                </a>*/}
            </div>
        </div>
    );
}

export default Contact;
