import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

console.log(data);

export default function App() {
    let cards = data.map((item) => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    });

    return (
        <div>
            <Navbar/>
            <Hero/>
            <div className="card-tile">
                {cards}
            </div>
        </div>
    )
}