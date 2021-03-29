// CardContainer is an wrapper for the Child Card Elements
// The intention of breaking the elements apart in this way is to demonstrate passing props to child elements
// then using the props to render element attributes.

import React, { useState, useEffect } from "react";
import Card from "./Card";

const fetch = require("node-fetch");

const CardContainer = () => {
  const [launches, setLaunches] = useState([]);

  const getLaunches = async () => {
    try {
      const response = await fetch("http://localhost:5000/launches");
      const data = await response.json();
      setLaunches(data.slice(0, 3));
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLaunches();
  }, []);

  return (
    <div className="m-2 d-inline-flex">
      {launches.map((launch, index) => 
        <Card Key={index} patch={launch.links.patch.small} name={launch.name} watch={launch.links.youtube_id}/>
      )}
    </div>
  );
};

export default CardContainer;