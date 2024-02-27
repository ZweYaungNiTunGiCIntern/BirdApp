// BirdList.js
import "./index.css"
import React from 'react';
import BirdCard from './BirdCard';
 // Import CSS file for styling
import { Link } from "react-router-dom";
import NotFound from "./NotFound.js"
const BirdList = ({ birds, title }) => {
  return (
    <div className="container-fluid">
      <h2>{title}</h2>
      <div className="row justify-text-between">
        {birds.map((bird) => (
          <div key={bird.id} className="col-md-6">
            <BirdCard bird={bird} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default BirdList;