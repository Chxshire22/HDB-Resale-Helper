import Button from "react-bootstrap/Button";
import { Form, InputGroup } from "react-bootstrap";
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export default function Selling(props) {
  
  const f = new Intl.NumberFormat("en-us",{
    currency: "SGD",
    style: "currency"
  })

  //input is only needed if seller is buying next HDB
  const [disabledNextHleInput, setDisabledNextHleInput] = useState(true)


  let {
    setCashMustUseValue,
    agencyFeeSellValue,
    setAgencyFeeSellValue,
    agentSellValue,
    setAgentSellValue,
    accruedValue,
    setAccruedValue,
    levyValue,
    setLevyValue,
    nextHdbValue,
    setNextHdbValue,
    setCpfUsedValue,
    cpfUsedValue,
    outstandingValue,
    setOutstandingValue,
    sellingPriceValue,
    setSellingPriceValue,
    setSalesProceeds,
    salesProceeds,
    setReturnedCpf,
    nextHleValue,
    setNextHleValue
  } = props;
  
  
  let handleSellingOnChange = (e) => {
    setSellingPriceValue(e.target.value)
  };
  let handleOutstandingOnChange = (e) => {
    setOutstandingValue(e.target.value)
  };
  let handleCpfUsedOnChange = (e) => {
    setCpfUsedValue(e.target.value)
  };
  let handleAccruedOnChange = (e) => {
    setAccruedValue(e.target.value)
  };
  let handleLevyOnChange = (e) => {
    setLevyValue(e.target.value)
  };
  let handleNextHdb = (e) => {
    setDisabledNextHleInput(nextHdbValue? true : false)
    setNextHdbValue(e.target.checked)
  };
  let handleNextHle = (e) => {
    setNextHleValue(e.target.checked)
  };
  let handleSellAgent = (e) =>{
    setAgentSellValue(e.target.checked)
    setAgencyFeeSellValue(((sellingPriceValue*0.02)*1.08).toFixed(2))
  }


  //what happens on submit
  
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("sellingPriceValue ", sellingPriceValue)
    console.log("outstandingValue ", outstandingValue)
    console.log("cpfUsedValue ", cpfUsedValue)
    console.log("accruedValue ", accruedValue)
    console.log("levyValue ", levyValue)
    console.log("nextHdbValue ", nextHdbValue)
    

    setSalesProceeds((proceeds) => {
      proceeds = sellingPriceValue - outstandingValue - cpfUsedValue - accruedValue - levyValue
      if(nextHleValue && agentSellValue){
        return (proceeds/2)-agencyFeeSellValue
      }
      else if(agentSellValue){
        return proceeds-agencyFeeSellValue
      }
      else if(nextHleValue){
        return proceeds/2
      }
      else{return proceeds}
    })

    console.log("salesProceeds ", salesProceeds)
    setReturnedCpf((cpf) => cpf = Number(cpfUsedValue)+Number(accruedValue))
    setCashMustUseValue((cash) => {
      return nextHleValue? Number(salesProceeds)+Number(agencyFeeSellValue):null
    })
  };


  // purely for debugging 

  useEffect(() => {

    return() => {
      console.log("component unmounted")
    }
  },[])


  return (
    <div>
      <Link to="/">
        <Button variant="primary">Home</Button>
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="sellingPrice">
          <Form.Label>Selling Price </Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              value={sellingPriceValue}
              required
              type="text"
              placeholder="Enter proposed selling price"
              onChange={handleSellingOnChange}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="outstandingLoan">
          <Form.Label>Outstanding Mortgage </Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              value={outstandingValue}
              required
              type="number"
              placeholder=""
              onChange={handleOutstandingOnChange}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpfUsed">
          <Form.Label>CPF Used </Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              value={cpfUsedValue}
              required
              type="number"
              placeholder=""
              onChange={handleCpfUsedOnChange}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="accruedInterest">
          <Form.Label>Accrued Interest </Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              value={accruedValue}
              required
              type="number"
              placeholder=""
              onChange={handleAccruedOnChange}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="saleLevy">
          <Form.Label>Upgrading/Resale Levy</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              value={levyValue}
              type="number"
              placeholder=""
              onChange={handleLevyOnChange}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="buyingHdbBool">
          <Form.Label>Are You Purchasing Another HDB? </Form.Label>
          <Form.Check
            checked={nextHdbValue}
            type="checkbox"
            onChange={handleNextHdb}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="usingHleBool">
          <Form.Label>Will you be taking HDB Loan for the next HDB?</Form.Label>
          <Form.Check
            checked={nextHleValue}
            disabled={disabledNextHleInput}
            type="checkbox"
            onChange={handleNextHle}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="usingHleBool">
          <Form.Label>Are you hiring an agent?</Form.Label>
          <Form.Check
            checked={agentSellValue}
            type="checkbox"
            onChange={handleSellAgent}
          />
          <p>{agentSellValue? `Your agency fee, incl 8% GST: ${f.format(agencyFeeSellValue)}`: null}</p>
        </Form.Group>

        <Button type="submit" variant="success">
          Submit
        </Button>
      </Form>
      <h3>
        Your cash proceeds: {salesProceeds == 0 ? "" : f.format(salesProceeds)}
      </h3>
      <Link to="/buying">
        <Button variant="primary">Your Affordability</Button>
      </Link>
    </div>
  );
}
