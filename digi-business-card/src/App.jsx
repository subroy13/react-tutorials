import React from "react";
import Display from './components/Display';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './style.css';

function App() {
    return ( 
        <div className="container">
            <Display/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;