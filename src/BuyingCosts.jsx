import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Form, InputGroup,Dropdown, DropdownButton } from "react-bootstrap";
import {useState} from "react"



export default function BuyingCosts(props) {

  const [dropdownValue, setDropdownValue] = useState("")
  const [agentBuyValue, setAgentBuyValue] = useState(false)
  const [agencyFeeBuyValue, setAgencyFeeBuyValue] = useState('')

  let {
    purchasePriceValue,
    setPurchasePriceValue,
    cashBalAfterFees,
    setCashBalAfterFees,
    salesProceeds,
    totalFeeValue,
    setTotalFeeValue
  } = props;

  const f = new Intl.NumberFormat("en-us", {
    style: "decimal",
  });

  // what happens on Submit
  const handleSubmit = (e) =>{
    e.preventDefault()

    setTotalFeeValue((total) => {
      total = Number(dropdownValue) + 120 + 80;
      return agentBuyValue? total + Number(agencyFeeBuyValue):total
    })

    setCashBalAfterFees(() => salesProceeds?salesProceeds-totalFeeValue:null)
  }
  return (
    <div className="container__block">
      <Link to="/">
        <Button className="btn-home btn-blue" variant="primary">
          Home
        </Button>
      </Link>
      <h1 className="container__block-header">Buying Fees</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 form-group">
          <Form.Label>Purchase Price</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type="number"
              required
              value={purchasePriceValue}
              onChange={(e) => setPurchasePriceValue(e.target.value)}
            ></Form.Control>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3 form-group">
          <Form.Label>Valuation Fee</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type="text"
              readOnly
              value={f.format(120)}
            ></Form.Control>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3 form-group">
          <Form.Label>Resale Application Fee</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type="text"
              readOnly
              value={f.format(80)}
            ></Form.Control>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3 form-group">
          <Form.Label>Conveyancing Fee</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              required
              readOnly
              type="text"
              value={dropdownValue ? f.format(dropdownValue) : ""}
            ></Form.Control>
            <DropdownButton
              variant="outline-secondary"
              title="Options"
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item onClick={() => setDropdownValue(500)}>
                HDB Legal
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropdownValue(3000)}>
                Private Law Firm
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3 form-group checkbox-field">
          <Form.Label>Are you hiring an agent?</Form.Label>
          <Form.Check
            checked={agentBuyValue}
            type="checkbox"
            onChange={(e) => {
              setAgentBuyValue(e.target.checked);
              setAgencyFeeBuyValue(
                (purchasePriceValue * 0.01 * 1.08).toFixed(2)
              );
            }}
          />
          <p className="agency-fee">
            {agentBuyValue
              ? `Your agency fee, incl 8% GST: $${f.format(agencyFeeBuyValue)}`
              : null}
          </p>
        </Form.Group>

        <div className="container__submit-btn">
          <Button className="btn btn-submit" variant="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>

      {totalFeeValue ? (
        <h3 className="calculated-results">
          Total fees: ${f.format(totalFeeValue)}
        </h3>
      ) : null}
      {cashBalAfterFees ? (
        <h3 className="calculated-results">
          Cash balance: ${f.format(cashBalAfterFees)}
        </h3>
      ) : null}

      <div className="return-action">
        <Link to="/buying">
          <Button className="btn btn-blue" variant="primary">
            Back
          </Button>
        </Link>{" "}
      </div>
    </div>
  );
}