import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("vantage-theme") || "dark";
  });

  // Apply theme across the website
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem("vantage-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((previous) =>
      previous === "dark" ? "light" : "dark"
    );
  }

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
        type="button"
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
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>

        <Link
          to="/services"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </Link>

        <Link
          to="/properties"
          onClick={() => setMenuOpen(false)}
        >
          Properties
        </Link>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>

        {/* Light / Dark Mode Button */}
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          title={
            theme === "dark"
              ? "Light Mode"
              : "Dark Mode"
          }
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;