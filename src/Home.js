import BirdList from "./BirdList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: Bird,
    error,
    isPending,
  } = useFetch("https://json-for-bird.vercel.app/Bird");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {Bird && <BirdList birds={Bird} title="မြန်မာနိုင်ငံတွင် တွေ့ရသော ငှက်များ" />}
    </div>
  );
};

export default Home;
