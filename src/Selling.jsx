import Button from "react-bootstrap/Button";
import { Form, InputGroup } from "react-bootstrap";
import {useState} from 'react'

export default function Selling(props) {
  
  // const f = new Intl.NumberFormat("en-us",{
  //   currency: "SGD",
  //   style: "currency"
  // })
  // states for each input fields
  const [sellingPriceValue, setSellingPriceValue] = useState("")
  const [outstandingValue, setOutstandingValue] = useState("")
  const [cpfUsedValue, setCpfUsedValue] = useState("")
  const [accruedValue, setAccruedValue] = useState("")
  const [levyValue, setLevyValue] = useState("")
  const [nextHdbValue, setNextHdbValue] = useState(false)

  //input is only needed if seller is buying next HDB
  const [nextHleValue, setNextHleValue] = useState(false)
  const [disabledNextHleInput, setDisabledNextHleInput] = useState(true)

  //lift this to App.jsx
  let setSalesProceeds = props.setSalesProceeds;
  let salesProceeds = props.salesProceeds

  
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
    setDisabledNextHleInput(disabledNextHleInput? false : true)
    setNextHdbValue(e.target.checked)
  };
  let handleNextHle = (e) => {
    setNextHleValue(e.target.checked)
  };


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
      if (nextHleValue == true){return proceeds/2}
      else{return proceeds}
    })

  };


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="sellingPrice">
          <Form.Label>Selling Price </Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
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
              type="number"
              placeholder=""
              onChange={handleLevyOnChange}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="buyingHdbBool">
          <Form.Label>Are You Purchasing Another HDB? </Form.Label>
          <Form.Check type="checkbox" onChange={handleNextHdb} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="usingHleBool">
          <Form.Label>Will you be taking HDB Loan for the next HDB?</Form.Label>
          <Form.Check required disabled={disabledNextHleInput} type="checkbox" onChange={handleNextHle}/>
        </Form.Group>
        <Button type="submit" variant="success">
          Submit
        </Button>
      </Form>

      <h3>Your cash proceeds: {salesProceeds}</h3>
    </div>
  );
}
