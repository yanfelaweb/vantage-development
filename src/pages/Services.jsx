

import { useEffect } from "react";
import "./Services.css";

function Services() {
        useEffect(() => {
        document.title = "Our Services | Vantage Developments";
      }, []);
  return (
    <main className="services-page">
      <section className="services-hero">
        <p>OUR SERVICES</p>

        <h1>Property solutions built around your goals.</h1>

        <p>
          From development and investment to ongoing property
          management, Vantage provides solutions designed to create
          and protect long-term value.
        </p>
      </section>

      <section className="services-list">
        <article>
          <span>01</span>
          <h2>Property Development</h2>
          <p>
            We plan and develop modern residential and commercial
            properties with a focus on thoughtful design, quality
            construction and strategic locations.
          </p>
        </article>

        <article>
          <span>02</span>
          <h2>Property Investment</h2>
          <p>
            We help clients explore carefully selected real estate
            opportunities designed around long-term property value.
          </p>
        </article>

        <article>
          <span>03</span>
          <h2>Property Management</h2>
          <p>
            We provide professional property management solutions
            focused on maintaining buildings, supporting occupants
            and protecting property value.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Services;