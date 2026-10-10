
import {useState, useEffect}  from "react";
import PropertyCard from "../components/PropertyCard";
import "./Properties.css";


      function Properties() {


              const [properties, setProperties] = useState([]);
              const [search, setSearch] = useState("");
              const [typeFilter, setTypeFilter] = useState("All");
                    useEffect(() => {
              document.title = "Properties | Vantage Developments";
            }, []);
                      useEffect(() => {
            fetch("https://vantage-backend-1fn9.onrender.com/api/properties")
              .then((response) => response.json())
              .then((data) => {
                setProperties(data);
              })
              .catch((error) => {
                console.error("Error fetching properties:", error);
              });
          }, []);
          const filteredProperties = properties.filter((property) => {
        const searchTerm = search.toLowerCase();

        const matchesSearch =
          property.name.toLowerCase().includes(searchTerm) ||
          property.location.toLowerCase().includes(searchTerm) ||
          property.type.toLowerCase().includes(searchTerm);

        const matchesType =
          typeFilter === "All" || property.type === typeFilter;

        return matchesSearch && matchesType;
      });
  return (
    <main className="properties-page">
      <h1>Our Properties</h1>

             <div className="property-filters">
 
    <label htmlFor="property-search">
  Search Properties
</label>

<div className="property-search-wrapper">
  <svg
    className="property-search-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>

  <input
    id="property-search"
    type="search"
    placeholder="Search properties or locations..."
    value={search}
    onChange={(event) => setSearch(event.target.value)}
  />
</div>


  

  <label htmlFor="property-type">Property Type</label>
  <select
    id="property-type"
    value={typeFilter}
    onChange={(event) => setTypeFilter(event.target.value)}
  >
    <option value="All">All Properties</option>
    <option value="Residential">Residential</option>
    <option value="Commercial">Commercial</option>
  </select>
</div>
      <p>
        Explore our collection of thoughtfully designed residential
        and commercial developments.
      </p>

      <div className="properties-grid">
  {filteredProperties.length > 0 ? (
    filteredProperties.map((property) => (
      <PropertyCard
        key={property._id}
        property={property}
      />
    ))
  ) : (
    <p>No properties found matching your search.</p>
  )}
</div>
    </main>
  );
}

export default Properties;