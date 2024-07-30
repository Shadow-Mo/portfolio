import React from 'react';
import Waving from '../images/waving.png';
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import './Hero.scss';

const skillsIcons = [
    {
        img: "https://skillicons.dev/icons?i=html,css",
        id: 1,
    },
    {
        img: "https://skillicons.dev/icons?i=js,react",
        id: 2,
    },
    {
        img: "https://skillicons.dev/icons?i=nodejs,express",
        id: 3,
    },
    {
        img: "https://skillicons.dev/icons?i=git,scss",
        id: 4,
    },
];

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="content">
                    <div className="hero-main">
                        <div className="hero-text">
                            <h1>Full Stack Developer</h1>
                            <img src={Waving} alt="waving_hand" />
                            <p>
                                Hi, I'm Mounesha Zonde. A passionate Full Stack Developer based in Pune(MH), India. 📍
                            </p>
                            <span>
                                <a
                                    aria-label="linkedin"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/mounesha-zonde-3a8481153/"
                                >
                                    <IconBrandLinkedin width={32} height={32} />
                                </a>
                                <a
                                    aria-label="github"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://github.com/Shadow-Mo/"
                                >
                                    <IconBrandGithub width={32} height={32} />
                                </a>
                            </span>
                        </div>
                        <div className="hero-img"></div>
                    </div>
                    <div className="skills">
                        <p>Tech Stack</p>
                        <div className="logos">
                            <ul>
                                {skillsIcons.map((icon) => (
                                    <li key={icon.id}>
                                        <img src={icon.img} alt="skill-icon" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero