import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-background">
      <h1 className="home-header">HDB Resale Helper</h1>
      <h3 className="home-header__tag">I am ...</h3>
      <Link to="/selling"><Button className="button button-selling" variant="primary">Selling</Button></Link>
      <Link to="/buying"><Button className="button button-buying" variant="primary">Buying</Button></Link>
    </div>
  );
}
