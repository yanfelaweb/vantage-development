import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom"; 

const API_URL = "http://localhost:5000/api/properties";

const emptyForm = {
  name: "",
  slug: "",
  location: "",
  price: "",
  type: "",
  status: "",
  completionStatus: "",
  description: "",
  bedrooms: "",
  bathrooms: "",
  size: "",
  image: "",
};

function Admin() {


const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("adminToken");
  navigate("/admin-login", { replace: true });
};



  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [editingSlug, setEditingSlug] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Get the admin login token.
  const getAuthHeaders = () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
  });

  // Fetch all properties (public route).
  const fetchProperties = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Could not fetch properties");
      }

      const data = await response.json();
      setProperties(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    document.title = "Admin Dashboard | Vantage Developments";
    fetchProperties();
  }, []);

  // Update form fields.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Fill the form with the selected property's details.
  const handleEdit = (property) => {
    setEditingSlug(property.slug);

    setFormData({
      name: property.name || "",
      slug: property.slug || "",
      location: property.location || "",
      price: property.price ?? "",
      type: property.type || "",
      status: property.status || "",
      completionStatus: property.completionStatus || "",
      description: property.description || "",
      bedrooms: property.bedrooms ?? "",
      bathrooms: property.bathrooms ?? "",
      size: property.size ?? "",
      image: property.image || "",
    });

    setError("");
    setMessage("");

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset the form.
  const resetForm = () => {
    setFormData({ ...emptyForm });
    setEditingSlug(null);
    setError("");
  };

  // Create or update a property.
  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    const isEditing = editingSlug !== null;

    const url = isEditing
      ? `${API_URL}/${encodeURIComponent(editingSlug)}`
      : API_URL;

    const method = isEditing ? "PUT" : "POST";

    const propertyData = {
      ...formData,
      price: Number(formData.price),
      bedrooms: Number(formData.bedrooms || 0),
      bathrooms: Number(formData.bathrooms || 0),
      size: Number(formData.size),
    };

    try {
      const response = await fetch(url, {
        method,
        headers: getAuthHeaders(),
        body: JSON.stringify(propertyData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            result.message ||
            "Failed to save property"
        );
      }

      setMessage(
        isEditing
          ? "Property updated successfully!"
          : "Property created successfully!"
      );

      resetForm();
      await fetchProperties();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Delete a property.
  const handleDelete = async (slug) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmed) return;

    setError("");
    setMessage("");

    try {
      const response = await fetch(
        `${API_URL}/${encodeURIComponent(slug)}`,
        {
          method: "DELETE",
          headers: getAuthHeaders(),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            result.message ||
            "Failed to delete property"
        );
      }

      if (editingSlug === slug) {
        resetForm();
      }

      setMessage("Property deleted successfully!");
      await fetchProperties();
    } catch (err) {
      setError(err.message);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    boxSizing: "border-box",
  };

  const fieldStyle = {
    display: "block",
    marginBottom: "14px",
  };

  return (
    <main
      className="admin-page"
      style={{
        maxWidth: "1000px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <h1>Vantage Admin Dashboard</h1>
      <p>Manage properties from here.</p>


                <button
            type="button"
            onClick={handleLogout}
            style={{
              backgroundColor: "#173A32",
              color: "#FFFFFF",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            Logout
          </button>

      {message && (
        <p role="status" style={{ color: "green" }}>
          {message}
        </p>
      )}

      {error && (
        <p role="alert" style={{ color: "red" }}>
          {error}
        </p>
      )}

      <section>
        <h2>
          {editingSlug ? "Edit Property" : "Add New Property"}
        </h2>

        {editingSlug && (
          <p>
            Currently editing: <strong>{editingSlug}</strong>
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <label style={fieldStyle}>
            Property Name
            <input
              style={inputStyle}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label style={fieldStyle}>
            Slug
            <input
              style={inputStyle}
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              required
            />
          </label>

          <label style={fieldStyle}>
            Location
            <input
              style={inputStyle}
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </label>

          <label style={fieldStyle}>
            Price (₦)
            <input
              style={inputStyle}
              type="number"
              name="price"
              min="0"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </label>

          <label style={fieldStyle}>
            Property Type
            <select
              style={inputStyle}
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select property type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
          </label>

          <label style={fieldStyle}>
            Property Status
            <select
              style={inputStyle}
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select status</option>
              <option value="For Sale">For Sale</option>
              <option value="Available">Available</option>
              <option value="Sold">Sold</option>
            </select>
          </label>

          <label style={fieldStyle}>
            Completion Status
            <select
              style={inputStyle}
              name="completionStatus"
              value={formData.completionStatus}
              onChange={handleChange}
              required
            >
              <option value="">Select completion status</option>
              <option value="Completed">Completed</option>
              <option value="Under Construction">
                Under Construction
              </option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </label>

          <label style={fieldStyle}>
            Description
            <textarea
              style={inputStyle}
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
            />
          </label>

          <label style={fieldStyle}>
            Bedrooms
            <input
              style={inputStyle}
              type="number"
              name="bedrooms"
              min="0"
              value={formData.bedrooms}
              onChange={handleChange}
            />
          </label>

          <label style={fieldStyle}>
            Bathrooms
            <input
              style={inputStyle}
              type="number"
              name="bathrooms"
              min="0"
              value={formData.bathrooms}
              onChange={handleChange}
            />
          </label>

          <label style={fieldStyle}>
            Size (sqm)
            <input
              style={inputStyle}
              type="number"
              name="size"
              min="1"
              value={formData.size}
              onChange={handleChange}
              required
            />
          </label>

          <label style={fieldStyle}>
            Image Path
            <input
              style={inputStyle}
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="/src/images/vantage height.jpg"
            />
          </label>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <button type="submit" disabled={loading}>
              {loading
                ? "Saving..."
                : editingSlug
                ? "Update Property"
                : "Add Property"}
            </button>

            {editingSlug && (
              <button type="button" onClick={resetForm}>
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </section>

      <hr style={{ margin: "35px 0" }} />

      <section>
        <h2>Existing Properties</h2>

        {properties.length === 0 && (
          <p>No properties available.</p>
        )}

        {properties.map((property) => (
          <div
            key={property._id}
            style={{
              border: "1px solid #ddd",
              padding: "16px",
              marginBottom: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>{property.name}</h3>
            <p>{property.location}</p>

            <p>
              ₦{Number(property.price).toLocaleString()}
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <button
                type="button"
                onClick={() => handleEdit(property)}
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => handleDelete(property.slug)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Admin;