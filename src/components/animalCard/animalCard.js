import React from "react";
import "./animalCard.css";

const animalCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.moveAnimal(props.id)} className="move">
    </span>
  </div>
);

export default animalCard;
