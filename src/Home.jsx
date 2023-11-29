import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="home-background">
        <h1 className="home-header">HDB Resale Helper</h1>
        <h3 className="home-header__tag">I am ...</h3>
        <div className="links">
          <Link to="/selling">
            <Button className="btn btn-selling" variant="primary">
              Selling
            </Button>
          </Link>
          <Link to="/buying">
            <Button className="btn btn-buying" variant="primary">
              Buying
            </Button>
          </Link>
        </div>
      </div>

      <footer>
        <p>
          UIcons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
        </p>
      </footer>
    </div>
  );
}
