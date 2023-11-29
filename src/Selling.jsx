import Button from "react-bootstrap/Button";
import { Form, InputGroup } from "react-bootstrap";
import {useState} from 'react'

export default function Selling(props) {

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

  
  let handleSellingOnChange = (e) => {
    setSellingPriceValue(e.target.value)
  };
  let handleOutstandingOnChange = (e) => {
    setOutstandingValue(e.target.value)
  };
  let handleCpfUsedOnChange = (e) => {
    setCpfUsedValue(e.target.event)
  };
  let handleAccruedOnChange = (e) => {
    setAccruedValue(e.target.value)
  };
  let handleLevyOnChange = (e) => {
    setLevyValue(e.target.event)
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
    console.log("nextHdbValue ", nextHdbValue)
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="sellingPrice">
        <Form.Label>Selling Price </Form.Label>
        <InputGroup>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            type="number"
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
        <Form.Check disabled={disabledNextHleInput} type="checkbox" onChange={handleNextHle}/>
      </Form.Group>

      <Button type="submit" variant="success">
        Submit
      </Button>
    </Form>
  );
}
