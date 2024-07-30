import React from 'react';
import WorkingEmoji from "../images/working-emoji.c5325f52b5be329995a5.png";
import AboutImage from "../images/about-img.62b47e7f183d4b4e9feb.webp";
// import RoundText from "../images/about-me/roundText.svg";
import RoundText from "../images/about-me/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg";
import './AboutMe.scss';

function AboutMe() {
    return (
        <>
            <section className="about" id='about'>
                <div className="container">
                    <div className="about-content">
                        <div className="img-side">
                            <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
                            <img src={AboutImage} alt="" className="img-side__main-img" />
                            <span>
                                <img src={RoundText} alt="text" />
                            </span>
                        </div>
                        <div className="text-side">
                            <h3>About me</h3>
                            <h4>Full Stack developer based in Pune(MH), India 📍</h4>
                            <p>
                                Hey, my name is Mounesha Zonde, and I'm a full stack developer. My passion is to create and develop a clean UI/UX for my users.
                                <br />
                                <br />
                                My main stack is currently Reactjs in combination with Material UI and Nodejs and MySQL for the backend.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe