import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link to={`/${props.id}`} target="_blank">
      <div className="card">
        <img src={props.thumbnail} alt="thumbnail" />
        <h2 className="card-name">{props.name}</h2>
      </div>
    </Link>
  );
}
