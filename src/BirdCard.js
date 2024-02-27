import React from 'react';
import { Link } from 'react-router-dom';

const BirdCard = ({ bird }) => {
  return (
    <div className="card mb-3 my-5 mx-3 d-inline-block col-md-6" style={{ width: '250px', height: '350px' }}>
      <Link to={`/bird/${bird.id}`}>
        <img src={bird.ImagePath} alt={bird.BirdMyanmarName} className="card-img-top bird-image" style={{ width: '250px', height: '250px' }} />
        <div className="card-body">
          <h5 className="card-title">{bird.BirdMyanmarName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{bird.BirdEnglishName}</h6>
        </div>
      </Link>
    </div>
  );
};

export default BirdCard;