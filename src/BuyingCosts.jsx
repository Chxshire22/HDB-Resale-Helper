import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Form, InputGroup } from "react-bootstrap";


export default function BuyingCosts(props) {



  // what happens on Submit
  const handleSubmit = (e) =>{

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
            <Form.Control type="number"></Form.Control>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3 form-group">
          <Form.Label>Agent Commission</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control></Form.Control>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3 form-group">
          <Form.Label>Valuation Fee</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control></Form.Control>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3 form-group">
          <Form.Label>Resale Application Fee</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control></Form.Control>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3 form-group">
          <Form.Label>Conveyancing Fee</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control></Form.Control>
          </InputGroup>
        </Form.Group>


      </Form>

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