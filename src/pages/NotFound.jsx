import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | Vantage Developments";
  }, []);

  return (
    <main className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>

        <p>
          The page you are looking for does not exist or may have
          been moved.
        </p>

        <Link to="/">Return Home</Link>
      </div>
    </main>
  );
}

export default NotFound;