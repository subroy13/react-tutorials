import React from "react";

function MainComponent() {
    return ( 
        <div className="mainarea">
            <h1 className="title">Fun Facts about React</h1>
            <ul className="points">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    );
}

export default MainComponent;