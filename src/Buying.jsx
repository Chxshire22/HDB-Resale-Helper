import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Form, InputGroup } from "react-bootstrap";
// import { useState } from "react";

export default function Buying(props) {
  let {
    cashMustUseValue,
    currentOa,
    setCurrentOa,
    loanAmount,
    setLoanAmount,
    cashToUse,
    setCashToUse,
    grantsAmount,
    setGrantAmount,
    affordability,
    setAffordability,
    returnedCpf,
    salesProceeds,
    nextHleValue,
  } = props;

  const f = new Intl.NumberFormat("en-us", {
    currency: "SGD",
    style: "currency",
  });

  //handles
  let handleCurrOa = (e) => {
    setCurrentOa(e.target.value);
  };
  let handleLoan = (e) => {
    setLoanAmount(e.target.value);
  };
  let handleCashToUse = (e) => {
    setCashToUse(e.target.value);
  };
  let handleGrants = (e) => {
    setGrantAmount(e.target.value);
  };

  //what happens on Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(salesProceeds);
    setAffordability((affordability) => {
      affordability =
        Number(returnedCpf) +
        Number(currentOa) +
        Number(loanAmount) +
        Number(cashToUse) +
        Number(grantsAmount);
      return nextHleValue ? affordability + salesProceeds : affordability;
    });
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
            value={cashMustUseValue}
          ></Form.Control>
        </InputGroup>
      </Form.Group>
    );
  };

  return (
    <div>
      <Link to="/">
        <Button variant="primary">Home</Button>
      </Link>

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
            <Form.Control
              onChange={handleCurrOa}
              required
              type="number"
              placeholder=""
              value={currentOa? currentOa:""}
            ></Form.Control>
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <Form.Label>Eligible Loan Amount</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              onChange={handleLoan}
              type="number"
              required
              value={loanAmount? loanAmount: ""}
            ></Form.Control>
          </InputGroup>
        </Form.Group>
        {nextHleValue ? <CpfMustUse /> : null}

        <Form.Group>
          <Form.Label>Cash To Use</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              onChange={handleCashToUse}
              type="number"
              value={cashToUse? cashToUse: ""}
              placeholder=""
            ></Form.Control>
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <Form.Label>Grants</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              onChange={handleGrants}
              type="number"
              value={grantsAmount? grantsAmount: ""}
            ></Form.Control>
          </InputGroup>
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>

      <h3>
        Your max budget: {affordability == 0 ? "" : f.format(affordability)}
      </h3>

      <Link to="/selling">
        <Button variant="primary">Selling</Button>
      </Link>
    </div>
  );
}
