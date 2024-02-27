import Home from './Home.js'
import './App.css';
import BirdDetails from "./BirdDetail.js"
import NavBar from "./NavBar.js"
import NotFound from "./NotFound.js"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
        <Routes>
        <Route path="/" element={<Home />} />
        
        
        <Route path="/Bird/:id" element={<BirdDetails />} />
       
        <Route path="*" element={<NotFound />} />
      </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
