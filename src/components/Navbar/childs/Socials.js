import React from "react";
import {ExternalLink} from "react-external-link";
import {socialsData} from "../../../data/socialsData";

const Socials = () => {
    return (
        <div className="social_media">
            {socialsData.map((social, index) => (
                <ExternalLink href={social.link} key={index}>
                    <div>
                        {social.icon}
                    </div>
                </ExternalLink>
            ))}
        </div>
    )
}

export default Socials