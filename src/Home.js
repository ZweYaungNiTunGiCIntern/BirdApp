import BirdList from "./BirdList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: Bird,
    error,
    isPending,
  } = useFetch("http://localhost:9000/Bird");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {Bird && <BirdList birds={Bird} title="All birds" />}
    </div>
  );
};

export default Home;
