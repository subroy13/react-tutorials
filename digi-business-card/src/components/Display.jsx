import React from "react";
import profilePicture from "../images/karya.jpg";

function Display() {
    return ( 
        <section className="display">
        <img src={profilePicture} alt="Profile" className="display-picture" />
        </section>
    );
}

export default Display;