import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BirdDetails = () => {
  const { id } = useParams();
  const {
    data: bird,
    error,
    isPending,
  } = useFetch("https://json-for-bird.vercel.app/Bird/" + id);
  useEffect(() => {
      AOS.init();
  }, []);

  return (
    <div>
        {isPending && <div>Loading..</div>}
        {error && <div>{error}</div>}
        {bird && (
           <div className="container px-md-6 py-md-6 px-3 py-3 mx-auto my-5" data-aos="fade-up">
           <div className="row justify-content-center align-items-stretch"> {/* Add align-items-stretch */}
               <div className="col-md-6 mb-4">
                   <div className="card shadow bg-light h-100" data-aos="fade-right" > {/* Add h-100 class to make the card full height */}
                       <div className="card-body text-center d-flex flex-column justify-content-between h-100"> {/* Add d-flex, flex-column, and justify-content-between */}
                           <div>
                               <h5 className="blog-preview my-3">{bird.BirdMyanmarName}</h5>
                               <h6 className="card-subtitle mb-2 text-muted">{bird.BirdEnglishName}</h6>
                               <p>{bird.Description}</p>
                           </div>
                           <div> {/* Add an empty div for proper spacing */}
                           </div>
                       </div>
                   </div>
               </div>
               <div className="col-md-6">
                   <div className="card shadow h-100" data-aos="fade-left" > {/* Add h-100 class to make the card full height */}
                       <img src={process.env.PUBLIC_URL + '/' + bird.ImagePath} alt={bird.BirdMyanmarName} className="card-img-top bird-image h-100" /> {/* Add h-100 class to make the image full height */}
                   </div>
               </div>
           </div>
       </div>
       
        )}
    </div>
);

};

export default BirdDetails;
