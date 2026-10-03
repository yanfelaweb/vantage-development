


import { useEffect } from "react";
import "./About.css";
function About() {
  useEffect(() => {
  document.title = "About Us | Vantage Developments";
}, []);
  return (
    <main className="about-page">
      <section className="about-hero">
        <p>ABOUT VANTAGE</p>

        <h1>We create spaces designed to stand the test of time.</h1>

        <p>
          Vantage Developments is a modern real estate development
          company focused on creating thoughtfully designed residential
          and commercial spaces for contemporary living.
        </p>
      </section>

      <section className="about-story">
        <div>
          <p>OUR STORY</p>
          <h2>Building with purpose.</h2>
        </div>

        <div>
          <p>
            We believe great real estate goes beyond buildings.
            It is about creating environments where people can live,
            work and build their futures.
          </p>

          <p>
            Our approach combines thoughtful design, strategic
            locations and attention to quality to create developments
            with lasting value.
          </p>
        </div>
      </section>
              <section className="about-values">
          <div className="section-heading">
            <p>WHAT GUIDES US</p>
            <h2>Our purpose and principles</h2>
          </div>

          <div className="values-grid">
            <article>
              <h3>Our Mission</h3>
              <p>
                To create thoughtfully designed developments that improve
                everyday living and deliver lasting value.
              </p>
            </article>

            <article>
              <h3>Our Vision</h3>
              <p>
                To become a trusted real estate development company known
                for quality, innovation and responsible growth.
              </p>
            </article>

            <article>
              <h3>Our Values</h3>
              <p>
                Quality, integrity, thoughtful design and a commitment to
                creating spaces that serve people well.
              </p>
            </article>
          </div>
        </section>
    </main>
  );
}

export default About;