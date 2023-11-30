import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="home-background">
        <h1 className="home-header">HDB Resale Helper</h1>
        <h3 className="home-header__tag">I am ...</h3>
        <div className="links">
          <Link className="link" to="/selling">
            <Button className="btn btn-selling" variant="warning">
              Selling
            <img className="responsive-img" src="src/assets/img/for-sale.png" alt="" />
            </Button>
          </Link>
          <Link className="link" to="/buying">
            <Button className="btn btn-buying" variant="warning">
              Buying
            <img className="responsive-img" src="src/assets/img/property.png" alt="" />
            </Button>
          </Link>
        </div>
      </div>


    </div>
  );
}
