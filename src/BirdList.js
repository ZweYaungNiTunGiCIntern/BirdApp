// BirdList.js

import React from 'react';
import BirdCard from './BirdCard';
 // Import CSS file for styling
import { Link } from "react-router-dom";
import NotFound from "./NotFound.js"
const BirdList = ({ birds, title }) => {
  return (
    <div className="container-fluid px-5 py-5">
      <h2 className="mb-5">{title}</h2>
      <div className="row justify-text-between">
        {birds.map((bird) => (
          <div key={bird.id} className="col-lg-4 col-md-6 mb-4">
            <BirdCard bird={bird} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default BirdList;