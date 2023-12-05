import Button from "react-bootstrap/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import {gsap} from "gsap"
// import { useEffect, useLayoutEffect, useRef } from "react";

export default function Home() {

  // const headerRef = useRef()
  // const headerTagRef = useRef()
  // const sellingRef = useRef()
  // const buyingRef = useRef()

  // const handleSellingClick = () => {
  //   const timeline = gsap.timeline({ defaults: { duration: "0.7" } });
  //   timeline
  //     .to(headerRef.current, { y: "-=100vh", ease: "power2.out" })
  //     .to(headerTagRef.current, { y: "-=100vh", ease: "power2.out" })
  //     .to(sellingRef.current, { y: "-=100vh", ease: "power2.out" })
  //     .to(buyingRef.current, { y: "-=100vh", ease: "power2.out", onComplete:()=>useNavigate("/selling")})
  // };


  // useLayoutEffect(() => { 
  //   const timeline = gsap.timeline({defaults:{duration:"0.7"}});
  //   timeline
  //     .from(headerRef.current, { y: "100vh", ease: "power2.in" })
  //     .from(headerTagRef.current, { y: "100vh", ease: "power2.in" })
  //     .from(sellingRef.current, { y: "100vh", ease: "power2.in" })
  //     .from(buyingRef.current, { y: "100vh", ease: "power2.in" });

  // },[])

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="home-background">
        <h1 className="home-header" >
          HDB Resale.Helper
        </h1>
        <h3 className="home-header__tag" >
          I am ...
        </h3>
        <div className="links">
          <Link to="/selling" className="link">
            <Button
        
              className="btn btn-selling"
              variant="warning"
            >
              Selling
              <img
                className="responsive-img"
                src="src/assets/img/for-sale.png"
                alt=""
              />
            </Button>
          </Link>
          <Link  className="link" to="/buying">
            <Button className="btn btn-buying" variant="warning">
              Buying
              <img
                className="responsive-img"
                src="src/assets/img/property.png"
                alt=""
              />
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
