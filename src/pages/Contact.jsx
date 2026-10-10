import "./Contact.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const API_URL =
  "https://vantage-backend-1fn9.onrender.com";

function Contact() {
  const [searchParams] = useSearchParams();
  const propertySlug = searchParams.get("property");

  // Properties from MongoDB
  const [properties, setProperties] = useState([]);
  const [propertiesError, setPropertiesError] = useState("");

  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [interest, setInterest] = useState("");

  // Submission states
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const selectedProperty = properties.find(
    (property) => property.slug === propertySlug
  );

  // Page title
  useEffect(() => {
    document.title = "Contact Us | Vantage Developments";
  }, []);

  // Fetch properties from MongoDB
  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch(
          `${API_URL}/api/properties`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }

        const data = await response.json();

        setProperties(data);
        setPropertiesError("");
      } catch (err) {
        console.error("Contact properties error:", err);
        setPropertiesError(
          "Unable to load properties. Please try again."
        );
      }
    }

    fetchProperties();
  }, []);

  // Automatically select property from inquiry link
  useEffect(() => {
    if (!propertySlug) {
      setInterest("");
      return;
    }

    if (selectedProperty) {
      setInterest(selectedProperty.slug);
    }
  }, [propertySlug, selectedProperty?.slug]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!/^\d{10,15}$/.test(phone.trim())) {
      setError("Please enter a valid phone number.");
      setMessage("");
      return;
    }

    setIsLoading(true);
    setMessage("");
    setError("");

    // Temporary demo submission.
    // This does not yet send or store the inquiry.
    setTimeout(() => {
      setIsLoading(false);

      setMessage(
        "Your form has been submitted in demo mode. " +
        "Inquiry delivery is not configured yet."
      );

      setFullName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setInterest("");
      setUserMessage("");
    }, 1500);
  }

  return (
    <main className="contact-page">
      <section className="contact-header">
        <p>CONTACT US</p>

        <h1>Let's talk about your next property.</h1>

        <p>
          Have a question about a property or our services?
          Get in touch with our team.
        </p>
      </section>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <label htmlFor="fullName">
          Full Name
        </label>

        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(event) =>
            setFullName(event.target.value)
          }
          required
        />

        {/* Email */}
        <label htmlFor="email">
          Email
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          required
        />

        {/* Phone */}
        <label htmlFor="phone">
          Phone
        </label>

        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(event) =>
            setPhone(event.target.value)
          }
          required
        />

        {/* Subject */}
        <label htmlFor="subject">
          Subject
        </label>

        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(event) =>
            setSubject(event.target.value)
          }
          required
        />

        {/* Service or Property */}
        <label htmlFor="interest">
          Service or Property of Interest
        </label>

        {selectedProperty && (
          <p>
            You are enquiring about:{" "}
            <strong>{selectedProperty.name}</strong>
          </p>
        )}

        <select
          id="interest"
          required
          value={interest}
          onChange={(event) =>
            setInterest(event.target.value)
          }
        >
          <option value="">
            Select a service or property
          </option>

          <optgroup label="Services">
            <option value="property-development">
              Property Development
            </option>

            <option value="property-investment">
              Property Investment
            </option>

            <option value="property-management">
              Property Management
            </option>
          </optgroup>

          <optgroup label="Properties">
            {properties.map((property) => (
              <option
                key={property._id}
                value={property.slug}
              >
                {property.name}
              </option>
            ))}
          </optgroup>
        </select>

        {propertiesError && (
          <p className="form-error">
            {propertiesError}
          </p>
        )}

        {/* Message */}
        <label htmlFor="message">
          Message
        </label>

        <textarea
          id="message"
          value={userMessage}
          onChange={(event) =>
            setUserMessage(event.target.value)
          }
          required
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Inquiry"}
        </button>
      </form>

      {/* Success feedback */}
      {message && (
        <p className="form-success">
          {message}
        </p>
      )}

      {/* Error feedback */}
      {error && (
        <p className="form-error">
          {error}
        </p>
      )}
    </main>
  );
}

export default Contact;