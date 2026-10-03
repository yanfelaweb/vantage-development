import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="navbar-logo"
        onClick={() => setMenuOpen(false)}
      >
        VANTAGE
      </Link>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="navigation-links"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div
        id="navigation-links"
        className={menuOpen ? "nav-links open" : "nav-links"}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>

        <Link to="/services" onClick={() => setMenuOpen(false)}>
          Services
        </Link>

        <Link to="/properties" onClick={() => setMenuOpen(false)}>
          Properties
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;