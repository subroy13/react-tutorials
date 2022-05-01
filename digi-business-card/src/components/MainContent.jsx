import React from "react";
import emailLogo from "../images/mail.png";
import linkedinLogo from "../images/linkedin.png";

function MainContent() {
    return ( 
        <section className="maincontent">
            <div className="brand">
            <h1 className="display-name">Laura Smith</h1>
            <h3 className="work">Frontend Developer</h3>
            <p className="website">laurasmith.website</p>
            <div className="display-connect">
                <button className="emailBtn">
                    <img src={emailLogo} alt="" />
                    <p>Email</p>
                </button>
                <button className="linkedinBtn">
                    <img src={linkedinLogo} alt="" />
                    <p>LinkedIn</p>
                </button>
            </div>
            </div>

            <div className="about">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>

            <div className="about">
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </section>    
    );
}

export default MainContent;