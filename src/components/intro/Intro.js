import React from "react";
import "./Intro.scss";
import { Button } from "antd";

function Intro() {
    return (
        <section className="intro-section section">
            <h2 className="small-text">Hey there, I'm</h2>
            <h1 className="name big-text">Fabio Marcellus.</h1>
            <h1 className="job-title big-text">I love being a <span>Front End Developer.</span></h1>
            <h2 className="info">I'm a self-taught Front End Developer with a <span className="colored-text"> Bachelor's Degree</span> in 
                Computer Science who primarily uses <span className="colored-text">React</span> to create web applications. Currently
                looking for my first role as a Front End Dev. 
            </h2>
            <Button className="intro-button" size="large" danger><a href="#about-section">Learn More</a></Button>
        </section>
    )
}

export default Intro;