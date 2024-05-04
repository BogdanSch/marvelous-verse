import React from "react";
import { Link } from "react-router-dom";

export default function HeroCard(props) {
  return (
    <Link to={`/characters/${props.id}`} target="_blank">
      <div className="card">
        <img src={props.thumbnail} alt="thumbnail" />
        <h2 className="card-name">{props.name}</h2>
      </div>
    </Link>
  );
}
