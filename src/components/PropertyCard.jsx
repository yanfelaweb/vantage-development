
import {Link} from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <img src={property.image} alt={property.name} loading="lazy" />
      <div>
        <p className="property-status">{property.status}</p>

        <h2 className="property-title">{property.name}</h2>

        <p className="property-location">{property.location}</p>
      </div>

      <div>
        <p className="property-description">
          {property.description}
        </p>

                  <p className="property-price">
            ₦{property.price.toLocaleString()}
          </p>

        <p className="property-details">
          {property.bedrooms} Bedrooms · {property.bathrooms} Bathrooms ·{" "}
          {property.size} sqm
        </p>

                  <Link
            className="property-button"
            to={`/properties/${property.slug}`}
          >
            View Property
          </Link>
      </div>
    </article>
  );
}

export default PropertyCard;