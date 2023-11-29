import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import { Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

export default function Buying(props) {
  //state passed from selling
  let returnedCpf = props.returnedCpf;
  let salesProceeds = props.salesProceeds;
  let nextHleValue = props.nextHleValue;

  const f = new Intl.NumberFormat("en-us",{
    currency: "SGD",
    style: "currency"
  })


  //what happens on Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(salesProceeds)
  };


  //only show if nextHleValue == true

  const CpfMustUse = () => {
    return (
      <Form.Group>
        <Form.Label>Cash Must Use</Form.Label>
        <InputGroup>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            type="number"
            readOnly
            value={salesProceeds}
          ></Form.Control>
        </InputGroup>
      </Form.Group>
    );
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>CPF Returned To Your Account</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type="text"
              readOnly
              value={f.format(returnedCpf)}
            ></Form.Control>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label>Current CPF OA</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control required type="number" placeholder=""></Form.Control>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label>Eligible Loan Amount</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control type="number" required></Form.Control>
          </InputGroup>
        </Form.Group>
        {nextHleValue? <CpfMustUse/>:null}


        <Form.Group>
          <Form.Label>Cash To Use</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control type="number"></Form.Control>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label>Grants</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control type="number"></Form.Control>
          </InputGroup>
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>

      <Link to="/selling">
        <Button variant="primary">Selling</Button>
      </Link>
    </div>
  );
}
