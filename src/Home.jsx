import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/selling"><Button variant="primary">Selling</Button></Link>
      <Link to="/buying"><Button variant="primary">Buying</Button></Link>
    </>
  );
}
