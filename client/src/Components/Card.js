// Card is the Child Element to CardContainer
import React from "react";

const Card = (props) => {
  // Generating a JSON object for inline styles 
  const styles = {
    width: "18rem",
  };

  const watchVideo = (e) => {
    e.preventDefault();
    window.open(`https://www.youtube.com/watch?v=${e.target.id}`);
  };

  return (
    <div key={props.Key} className="card m-3 col text-white bg-dark" style={styles}>
      <div className="card-header">{props.name}</div>
      <img className="p-3 card-img-top bg-light" src={props.patch} alt={`Patch for Spacex mission ${props.name}`} />
      <div className="card-body text-center">
        <button className="btn btn-primary" id={props.watch} onClick={watchVideo}>Watch Launch</button>
      </div>
    </div>
  );
};

export default Card;
