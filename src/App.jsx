import "./App.css";
import { useState } from "react";
// import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Selling from "./Selling";
import Buying from "./Buying";
import Home from "./Home";
// import ThemeProvider from "react-bootstrap/ThemeProvider";

function App() {
  const [salesProceeds, setSalesProceeds] = useState(0);
  const [returnedCpf, setReturnedCpf] = useState(0);
  const [nextHleValue, setNextHleValue] = useState(false);
  const [sellingPriceValue, setSellingPriceValue] = useState("");
  const [outstandingValue, setOutstandingValue] = useState("");
  const [cpfUsedValue, setCpfUsedValue] = useState("");
  const [accruedValue, setAccruedValue] = useState("");
  const [levyValue, setLevyValue] = useState("");
  const [nextHdbValue, setNextHdbValue] = useState(false);


  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/buying"
            element={
              <Buying nextHleValue={nextHleValue} returnedCpf={returnedCpf} salesProceeds={salesProceeds} />
            }
          />
          <Route
            path="/selling"
            element={
              <Selling
                accruedValue={accruedValue}
                setAccruedValue={setAccruedValue}
                levyValue={levyValue}
                setLevyValue={setLevyValue}
                nextHdbValue={nextHdbValue}
                setNextHdbValue={setNextHdbValue}
                setCpfUsedValue={setCpfUsedValue}
                cpfUsedValue = {cpfUsedValue}
                outstandingValue = {outstandingValue}
                setOutstandingValue = {setOutstandingValue}
                sellingPriceValue = {sellingPriceValue}
                setSellingPriceValue = {setSellingPriceValue}
                nextHleValue = {nextHleValue}
                setNextHleValue = {setNextHleValue}
                setReturnedCpf={setReturnedCpf}
                salesProceeds={salesProceeds}
                setSalesProceeds={setSalesProceeds}
              />
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

//show option for Timeline when SalesProceeds process is completed
