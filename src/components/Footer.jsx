import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>VANTAGE</h2>
        <p>
          Building thoughtfully designed spaces for modern living
          and ambitious businesses.
        </p>
      </div>

      <div>
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div>
        <h3>Contact</h3>
        <p>Lagos, Nigeria</p>
        <p>info@vantagedevelopments.com</p>
      </div>

      <p>
        © 2026 Vantage Developments. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;