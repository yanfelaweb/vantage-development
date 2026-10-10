import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

import heroHouse from "../images/hero-house.jpg";

const slides = [
  heroHouse,
  "/images/vantage height.jpg",
  "/images/The Grove Residence.jpg",
  "/images/Apex Business Park.jpg"
];

function Hero({ title, description }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(null);

  function nextSlide() {
    setCurrentSlide((previous) =>
      (previous + 1) % slides.length
    );
  }

  function previousSlide() {
    setCurrentSlide((previous) =>
      (previous - 1 + slides.length) % slides.length
    );
  }

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) =>
        (previous + 1) % slides.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (difference > 50) {
      nextSlide();
    } else if (difference < -50) {
      previousSlide();
    }

    touchStartX.current = null;
  }

  return (
    <section
      className="hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background image slides */}
      <div className="hero-slides">
        {slides.map((image, index) => (
          <div
            key={image}
            className={`hero-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{
              backgroundImage: `url("${encodeURI(image)}")`
            }}
          />
        ))}
      </div>

      {/* Dark overlay for readable text */}
      <div className="hero-overlay" />

      {/* Existing hero content */}
      <div className="hero-content">
        <p className="hero-label">
          VANTAGE DEVELOPMENTS
        </p>

        <h1>{title}</h1>
        <p>{description}</p>

        <Link to="/properties">
          Explore Properties
        </Link>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        className="hero-arrow hero-arrow-left"
        onClick={previousSlide}
        aria-label="Previous image"
      >
        &#10094;
      </button>

      <button
        type="button"
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Next image"
      >
        &#10095;
      </button>

      {/* Slide indicators */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`hero-dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;