import { useParams, Link } from "react-router-dom";
import properties from "../data/properties";
import "./PropertyDetails.css"
import { useEffect } from "react";

function PropertyDetails() {
  const { slug } = useParams();

  const property = properties.find(
    (property) => property.slug === slug
  );
  useEffect(() => {
  if (property) {
    document.title = `${property.name} | Vantage Developments`;
  } else {
    document.title = "Property Not Found | Vantage Developments";
  }
}, [property]);

  if (!property) {
  return (
    <main className="property-details-page">
      <h1>Property Not Found</h1>
      <p>The property you are looking for does not exist.</p>
      <Link to="/properties">
      View All Properties
      </Link>
    </main>
  );
}

 return (
  <main className="property-details-page">
    <section>
      <img src={property.image}
      alt={property.name} />
      <p>{property.status}</p>

      <h1>{property.name}</h1>

      <p>{property.location}</p>

      <p>{property.description}</p>

      <h2>₦{property.price.toLocaleString()}</h2>

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
                    {property.features && (
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