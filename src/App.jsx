import "./App.css";
import {useState} from 'react'
// import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Selling from "./Selling";
import Buying from "./Buying";
import Home from "./Home";


function App() {
  const [salesProceeds, setSalesProceeds] = useState("0")
  return (
    <>
      <Router>
        <Routes>
          <Route path="/buying" element={<Buying salesProceeds={salesProceeds}/>} />
          <Route
            path="/selling"
            element={<Selling salesProceeds={salesProceeds} setSalesProceeds={setSalesProceeds} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


//show option for Timeline when SalesProceeds process is completed 
