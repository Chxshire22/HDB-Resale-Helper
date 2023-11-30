
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Selling from "./Selling";
import Buying from "./Buying";
import Home from "./Home";
import "./App.css";

function App() {
  //states for selling
  const [salesProceeds, setSalesProceeds] = useState(0);
  const [returnedCpf, setReturnedCpf] = useState(0);
  const [nextHleValue, setNextHleValue] = useState(false);
  const [sellingPriceValue, setSellingPriceValue] = useState("");
  const [outstandingValue, setOutstandingValue] = useState("");
  const [cpfUsedValue, setCpfUsedValue] = useState("");
  const [accruedValue, setAccruedValue] = useState("");
  const [levyValue, setLevyValue] = useState("");
  const [nextHdbValue, setNextHdbValue] = useState(false);
  const [agentSellValue, setAgentSellValue] = useState(false)
  const [agencyFeeSellValue, setAgencyFeeSellValue] = useState(0)
  const [cashMustUseValue, setCashMustUseValue] = useState(0)
  //states for buying
  const [affordability, setAffordability] = useState(0);
  const [currentOa, setCurrentOa] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [cashToUse, setCashToUse] = useState(0);
  const [grantsAmount, setGrantAmount] = useState(0)


  return (
    <div className="app-container" style={{ minHeight: "100vh" }}>
      <Router>
        <Routes>
          <Route
            path="/buying"
            element={
              <Buying
                cashMustUseValue={cashMustUseValue}
                currentOa={currentOa}
                setCurrentOa={setCurrentOa}
                loanAmount={loanAmount}
                setLoanAmount={setLoanAmount}
                cashToUse={cashToUse}
                setCashToUse={setCashToUse}
                grantsAmount={grantsAmount}
                setGrantAmount={setGrantAmount}
                affordability={affordability}
                setAffordability={setAffordability}
                nextHleValue={nextHleValue}
                returnedCpf={returnedCpf}
                salesProceeds={salesProceeds}
              />
            }
          />
          <Route
            path="/selling"
            element={
              <Selling
                setCashMustUseValue={setCashMustUseValue}
                agencyFeeSellValue={agencyFeeSellValue}
                setAgencyFeeSellValue={setAgencyFeeSellValue}
                agentSellValue={agentSellValue}
                setAgentSellValue={setAgentSellValue}
                accruedValue={accruedValue}
                setAccruedValue={setAccruedValue}
                levyValue={levyValue}
                setLevyValue={setLevyValue}
                nextHdbValue={nextHdbValue}
                setNextHdbValue={setNextHdbValue}
                setCpfUsedValue={setCpfUsedValue}
                cpfUsedValue={cpfUsedValue}
                outstandingValue={outstandingValue}
                setOutstandingValue={setOutstandingValue}
                sellingPriceValue={sellingPriceValue}
                setSellingPriceValue={setSellingPriceValue}
                nextHleValue={nextHleValue}
                setNextHleValue={setNextHleValue}
                setReturnedCpf={setReturnedCpf}
                salesProceeds={salesProceeds}
                setSalesProceeds={setSalesProceeds}
              />
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

//show option for Timeline when SalesProceeds process is completed
