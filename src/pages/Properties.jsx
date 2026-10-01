
import {useState, useEffect}  from "react";
import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import "./Properties.css";


      function Properties() {

              const [search, setSearch] = useState("");
              const [typeFilter, setTypeFilter] = useState("All");
                    useEffect(() => {
              document.title = "Properties | Vantage Developments";
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

             <div className="property-filter">
                      <input
                  type="text"
                  placeholder="Search properties..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
                        <select
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

      <div>
  {filteredProperties.length > 0 ? (
    filteredProperties.map((property) => (
      <PropertyCard
        key={property.id}
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