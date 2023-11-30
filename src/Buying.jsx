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
  style: "decimal",
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

  const CashMustUse = () => {
    return (
      <Form.Group className="mb-3 form-group" >
        <Form.Label>Cash Must Use</Form.Label>
        <InputGroup>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            type="text"
            readOnly
            value={f.format(cashMustUseValue)}
          ></Form.Control>
        </InputGroup>
      </Form.Group>
    );
  };

  // only show if exists

  const CpfReturned = () =>{
    return (
      <Form.Group className="mb-3 form-group">
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
    );
  }

  return (
    <div className="container__block">
      <Link to="/">
        <Button className="btn-home btn-blue" variant="primary">
          Home
        </Button>
      </Link>

      <h1 className="container__block-header">Affordability</h1>

      <Form onSubmit={handleSubmit}>
        {returnedCpf ? <CpfReturned /> : null}

        <Form.Group className="mb-3 form-group">
          <Form.Label>Current CPF OA</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              onChange={handleCurrOa}
              required
              type="number"
              placeholder=""
              value={currentOa ? currentOa : ""}
            ></Form.Control>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3 form-group">
          <Form.Label>Eligible Loan Amount</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              onChange={handleLoan}
              type="number"
              required
              value={loanAmount ? loanAmount : ""}
            ></Form.Control>
          </InputGroup>
        </Form.Group>
        {nextHleValue ? <CashMustUse /> : null}

        <Form.Group className="mb-3 form-group">
          <Form.Label>Cash To Use</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              onChange={handleCashToUse}
              type="number"
              value={cashToUse ? cashToUse : ""}
              placeholder=""
            ></Form.Control>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3 form-group">
          <Form.Label>Grants</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              onChange={handleGrants}
              type="number"
              value={grantsAmount ? grantsAmount : ""}
            ></Form.Control>
          </InputGroup>
        </Form.Group>

        <div className="container__submit-btn">
          <Button className="btn btn-submit" variant="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>

      {affordability ? (
        <h3 className="calculated-results">
          Your estimated budget: ${f.format(affordability)}
        </h3>
      ) : null}

      {/* <div className="return-action">
        <Link to="/selling">
          <Button className="btn btn-home btn-blue" variant="primary">
            Selling
          </Button>
        </Link>

        <p>Go to selling page</p>
      </div> */}
      <p className="return-action">
        <Link to="/selling">
          <Button className="btn btn-blue" variant="primary">
            Selling
          </Button>
        </Link>{" "}
        Go to selling page
      </p>
    </div>
  );
}
