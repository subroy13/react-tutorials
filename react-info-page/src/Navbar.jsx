import React from "react";
import logo from "./images/reactjs-icon-logo.png"

function Navbar() {
    return ( 
        <nav>
            <img src={logo} alt="React Logo" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    );
}

export default Navbar;