import React from 'react';
import { Link } from 'react-router-dom';

const BirdCard = ({ bird }) => {
  return (
    <div className="card rounded-5" style={{ width: '100%', height: '400px', backgroundColor: 'rgba(230,230,250, 0.5)' }}>
    <Link to={`/bird/${bird.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <img src={bird.ImagePath} alt={bird.BirdMyanmarName} className="card-img-top bird-image rounded-5" style={{ width: '100%', height: '250px', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }} />
        </div>
        <div className="blog-preview text-center mt-3">
          <h5 className="mb-2">{bird.BirdMyanmarName}</h5>
          <h6 className="mb-0 text-muted">{bird.BirdEnglishName}</h6>
        </div>
      </div>
    </Link>
  </div>
  
  );
};

export default BirdCard;