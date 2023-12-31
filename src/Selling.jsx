import Button from "react-bootstrap/Button";
import { Form, InputGroup } from "react-bootstrap";
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export default function Selling(props) {
  
  const f = new Intl.NumberFormat("en-us",{
    style:"decimal"
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
  

  //what happens on submit
  
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("sellingPriceValue ", f.format(sellingPriceValue))
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
      return nextHleValue
        ? Number(
            sellingPriceValue -
              outstandingValue -
              cpfUsedValue -
              accruedValue -
              levyValue
          )/2
        : null;
    })
  };


  // purely for debugging 

  useEffect(() => {

    return() => {
      console.log("component unmounted")
    }
  },[])


  return (
    <div className="container__block">
      <Link to="/">
        <Button className="btn btn-blue btn-home" variant="primary">
          Home
        </Button>
      </Link>

      <h1 className="container__block-header">Find out your sales proceeds</h1>

      <Form onSubmit={handleSubmit}>
        <div className="form-content">
          <Form.Group className="mb-3 form-group" controlId="sellingPrice">
            <Form.Label>Selling Price </Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                value={sellingPriceValue}
                required
                type="number"
                placeholder="Enter proposed selling price"
                onChange={(e) => setSellingPriceValue(e.target.value)}
                min={1}
                step={1}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="outstandingLoan">
            <Form.Label>Outstanding Mortgage </Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                value={outstandingValue}
                required
                type="number"
                placeholder=""
                onChange={(e) => setOutstandingValue(e.target.value)}
                step={0.01}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="cpfUsed">
            <Form.Label>CPF Used </Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                value={cpfUsedValue}
                required
                type="number"
                placeholder=""
                onChange={(e) => setCpfUsedValue(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="accruedInterest">
            <Form.Label>Accrued Interest </Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                value={accruedValue}
                required
                type="number"
                placeholder=""
                onChange={(e) => setAccruedValue(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="saleLevy">
            <Form.Label>Upgrading/Resale Levy</Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                value={levyValue}
                type="number"
                placeholder=""
                onChange={(e) => setLevyValue(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group
            className="mb-3 form-group checkbox-field"
            controlId="buyingHdbBool"
          >
            <Form.Label>Are You Purchasing Another HDB? </Form.Label>
            <Form.Check
              checked={nextHdbValue}
              type="checkbox"
              onChange={(e) => {
                setNextHdbValue(e.target.checked);
                setDisabledNextHleInput(nextHdbValue ? true : false);
              }}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 form-group checkbox-field"
            controlId="usingHleBool"
          >
            <Form.Label>
              Will you be taking HDB Loan for the next HDB?
            </Form.Label>
            <Form.Check
              checked={nextHleValue}
              disabled={disabledNextHleInput}
              type="checkbox"
              onChange={(e) => setNextHleValue(e.target.checked)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 form-group checkbox-field"
            controlId="usingHleBool"
          >
            <Form.Label>Are you hiring an agent?</Form.Label>
            <Form.Check
              checked={agentSellValue}
              type="checkbox"
              onChange={(e) => {
                setAgentSellValue(e.target.checked);
                setAgencyFeeSellValue(
                  (sellingPriceValue * 0.02 * 1.08).toFixed(2)
                );
              }}
            />
            <p className="agency-fee">
              {agentSellValue
                ? `Your agency fee, incl 8% GST: $${f.format(
                    agencyFeeSellValue
                  )}`
                : null}
            </p>
          </Form.Group>
          <div className="container__submit-btn">
            <Button className="btn btn-submit" variant="success" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form>
      {salesProceeds ? (
        <h3 className="calculated-results">
          Your cash proceeds: ${f.format(salesProceeds)}
        </h3>
      ) : null}
      <div className="call-to-action">
        <Link to="/buying">
          <Button className="btn btn-blue" variant="primary">
            Affordability
          </Button>
        </Link>
      </div>
    </div>
  );
}
