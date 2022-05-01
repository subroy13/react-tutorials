import React from "react";
import twitterLogo from "../images/twitter.png";
import fbLogo from "../images/fb.png";
import instaLogo from "../images/insta.png";
import gitLogo from "../images/github.png";

function Footer() {
    return ( 
        <footer>
            <button><img src={twitterLogo} alt="Twitter" /></button>
            <button><img src={fbLogo} alt="Facebook" /></button>
            <button><img src={instaLogo} alt="Instagram" /></button>
            <button><img src={gitLogo} alt="Github" /></button>
        </footer>
    );
}

export default Footer;