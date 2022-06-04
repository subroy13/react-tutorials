import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.item.coverImg}`} alt="" className="card-image"/>
            <div className="card-stats">
                <img src="../images/star.png" alt="" className="card-star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) &#8226;</span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
            <p className="card-description">{props.item.description}</p>
        </div>
    )
}