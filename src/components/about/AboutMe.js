import React from "react";
import "./AboutMe.scss";

function AboutMe() {
    return (
        <section id="about" className="about-section section" data-sal="slide-up" data-sal-duration="1000">
            <div className="title-container">
                <h2 className="section-title">About Me</h2>
            </div>
            <div className="start-journey">
                <h2 className="sub-heading">Start Of My Journey</h2>
                <h2 className="details">I enjoy creating web applications. During my Sophmore year at my 
                    university while earning my Bachelor's Degree, I was curious about Web Development and took my first course on Udemy. 
                    After that, I was hooked and made it my goal to become a Front End Developer. 
                </h2>
            </div>
            <div className="looking-for">
                <h2 className="sub-heading">Current Goal</h2>
                <h2 className="details">It's been 2 years since I started on my journey and now I believe I'm ready to show my skills
                    on a great team!
                </h2>
            </div>
            
           
        </section>
    )
}

export default AboutMe;