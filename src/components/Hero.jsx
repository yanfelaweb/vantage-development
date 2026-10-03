

import { Link } from "react-router-dom";

import "./Hero.css";

import heroHouse from "../images/hero-house.jpg";

function Hero({ title, description }) {
  return (
   
  
  
  <section
  className="hero"
  style={{ backgroundImage: `url(${heroHouse})` }}
>
      <div className="hero-content">
        <p className="hero-label">VANTAGE DEVELOPMENTS</p>

        <h1>{title}</h1>

        <p>{description}</p>
        <Link to="/properties">Explore Properties</Link>
      </div>
    </section>
  );
}

export default Hero;