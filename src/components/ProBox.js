import React from 'react';
import './ProBox.scss'; // assuming you have a separate stylesheet for ProBox styles

const ProBox = ({ title, img, date, description, techno1, techno2, code, demo, scrollY, icon, cName }) => {
    return (
        <div className={`pro-box ${cName}`}>
            <img src={img} alt={title} />
            <div className="pro-details">
                <h4>{title}</h4>
                <p>{date}</p>
                <p>{description}</p>
                <p>Technologies used: {techno1}, {techno2}</p>
                <div className="links">
                    <a href={code} target="_blank" rel="noopener noreferrer">Code</a>
                    <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
            </div>
            <div className="scroll">
                <span>{icon}</span>
                <p>Scroll: {scrollY}</p>
            </div>
        </div>
    );
};

export default ProBox;
