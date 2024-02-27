import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BirdDetails = () => {
  const { id } = useParams();
  const {
    data: bird,
    error,
    isPending,
  } = useFetch("http://localhost:9000/Bird/" + id);
  

  const handleClick = () => {
    fetch("http://localhost:9000/Bird/" + bird.id, { method: "DELETE" }).then(
      () => {
        window.location.href = "/";;
      },
    );
  };

  return (
    <div className="Bird-details">
      {isPending && <div>Loading..</div>}
      {error && <div>{error}</div>}
      {bird && (
        
            <div className="row">
                 <div className="col-md-6">
                    
                        <h5 className="card-title">{bird.BirdMyanmarName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{bird.BirdEnglishName}</h6>
                        <div className="card-body">
                            <p>{bird.Description}</p>
                        </div>
                        
                   
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <img src={process.env.PUBLIC_URL + '/' +bird.ImagePath} alt={bird.BirdMyanmarName} className="card-img-top bird-image"  />
                    </div>
                </div>
            </div>
      )}
    </div>
  );
};

export default BirdDetails;
