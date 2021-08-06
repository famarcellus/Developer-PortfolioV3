import React from "react";
import "./ContactMe.scss";
import { Button } from "antd";

function ContactMe() {
    return (
        <section id="contact" className="contact-section section" data-sal="slide-up" data-sal-duration="1000">
            <div className="title-container">
                <h2 className="section-title">Want To Reach Me?</h2>
            </div>
            <p className="details">Looking for a Front End Developer position. If you'd like to get in contact with me, click the button below!</p>
            <Button className="email-btn" size="large" ghost><a href="mailto:famarcellus12@gmail.com" rel="noopener noreferrer" target="_blank">Send Message</a></Button>
        </section>
    )
}

export default ContactMe;