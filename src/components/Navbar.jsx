import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <h1>VANTAGE</h1>
                    <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-control = "navigator-links"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
                <div id="navigation-links" className={menuOpen ? "nav-links open" : "nav-links"} >
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