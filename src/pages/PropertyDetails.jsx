import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PropertyDetails.css";

const API_URL =
  "https://vantage-backend-1fn9.onrender.com/api/properties";

function PropertyDetails() {
  const { slug } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProperty() {
      setLoading(true);
      setError("");
      setProperty(null);

      try {
        const response = await fetch(
          `${API_URL}/${encodeURIComponent(slug)}`,
          { signal: controller.signal }
        );

        if (response.status === 404) {
          throw new Error("Property Not Found");
        }

        if (!response.ok) {
          throw new Error("Failed to load property");
        }

        const data = await response.json();
        setProperty(data);

        document.title = `${data.name} | Vantage Developments`;
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          document.title = "Property Details | Vantage Developments";
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProperty();

    return () => controller.abort();
  }, [slug]);

  if (loading) {
    return (
      <main className="property-details-page">
        <p>Loading property details...</p>
      </main>
    );
  }

  if (error || !property) {
    return (
      <main className="property-details-page">
        <h1>{error || "Property Not Found"}</h1>
        <Link to="/properties">View All Properties</Link>
      </main>
    );
  }

  return (
    <main className="property-details-page">
      <section>
        <img
          src={property.image?.replace("/src/images/", "/images/")}
          alt={property.name}
        />

        <p>{property.status}</p>
        <h1>{property.name}</h1>
        <p>{property.location}</p>
        <p>{property.description}</p>

        <h2>₦{Number(property.price).toLocaleString()}</h2>

        <div className="property-features">
          <div>
            <strong>{property.bedrooms}</strong>
            <span>Bedrooms</span>
          </div>

          <div>
            <strong>{property.bathrooms}</strong>
            <span>Bathrooms</span>
          </div>

          <div>
            <strong>{property.size}</strong>
            <span>Square Metres</span>
          </div>

          <div>
            <strong>{property.completionStatus}</strong>
            <span>Completion Status</span>
          </div>
        </div>

        {property.features?.length > 0 && (
          <div className="property-amenities">
            <h2>Property Features</h2>

            <ul>
              {property.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <Link to={`/contact?property=${property.slug}`}>
          Make an Inquiry
        </Link>
      </section>
    </main>
  );
}

export default PropertyDetails;