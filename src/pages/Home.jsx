
import { useEffect } from "react";
import Hero from "../components/Hero";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";
import "../Properties.css";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
            useEffect(() => {
            document.title = "Vantage Developments | Premium Real Estate";
          }, []);
  return (
    <main>
                    <Hero
                      title="Spaces designed for the way you live."
                      description="Thoughtfully designed homes for modern living."
                    />
                    
                    <section className="home-services">
                <div className="section-heading">
                  <p>WHAT WE DO</p>
                  <h2>Real Estate Solutions</h2>
                  <p>
                    From development to investment and management, we create
                    property solutions built around long-term value.
                  </p>
                </div>

                <div className="services-grid">
                  <article>
                    <h3>Property Development</h3>
                    <p>
                      Thoughtfully planned residential and commercial developments
                      designed for modern living.
                    </p>
                  </article>

                  <article>
                    <h3>Property Investment</h3>
                    <p>
                      Carefully selected opportunities designed to help clients
                      invest in quality real estate.
                    </p>
                  </article>

                  <article>
                    <h3>Property Management</h3>
                    <p>
                      Professional management focused on maintaining properties
                      and protecting long-term value.
                    </p>
                  </article>
                </div>
              </section>
                    <section className="home-stats">
                <div>
                  <strong>15+</strong>
                  <span>Projects Completed</span>
                </div>

                <div>
                  <strong>250+</strong>
                  <span>Homes Delivered</span>
                </div>

                <div>
                  <strong>10+</strong>
                  <span>Years of Experience</span>
                </div>

                <div>
                  <strong>98%</strong>
                  <span>Client Satisfaction</span>
                </div>
              </section>
                <section className="why-vantage">
                <div className="section-heading">
                  <p>WHY VANTAGE</p>
                  <h2>Built around quality and long-term value.</h2>
                  <p>
                    We combine thoughtful design, strategic locations and
                    professional execution to create spaces people are proud to own.
                  </p>
                </div>

                <div className="why-grid">
                  <article>
                    <h3>Prime Locations</h3>
                    <p>
                      We carefully select locations with strong potential for
                      comfortable living and long-term value.
                    </p>
                  </article>

                  <article>
                    <h3>Thoughtful Design</h3>
                    <p>
                      Every development balances modern architecture,
                      functionality and everyday comfort.
                    </p>
                  </article>

                  <article>
                    <h3>Quality Construction</h3>
                    <p>
                      We focus on durable materials and attention to detail
                      throughout every stage of development.
                    </p>
                  </article>
                </div>
              </section>
              <section className="testimonials">
              <div className="section-heading">
                <p>CLIENT STORIES</p>
                <h2>What our clients say</h2>
                <p>
                  Experiences from clients who chose Vantage for their
                  property journey.
                </p>
              </div>

              <div className="testimonials-grid">
                <article>
                  <p>
                    “The entire process was clear and professional. Vantage
                    delivered a home that exceeded our expectations.”
                  </p>
                  <strong>Adeola Martins</strong>
                  <span>Homeowner</span>
                </article>

                <article>
                  <p>
                    “I appreciated the attention to detail and communication
                    throughout the investment process.”
                  </p>
                  <strong>Chinedu Okafor</strong>
                  <span>Property Investor</span>
                </article>

                <article>
                  <p>
                    “The quality of the development and location made Vantage
                    an easy choice for our business.”
                  </p>
                  <strong>Sarah Williams</strong>
                  <span>Business Owner</span>
                </article>
              </div>
            </section>
                                <section className="home-cta">
                  <div>
                    <p>LET'S BUILD YOUR FUTURE</p>

                    <h2>Ready to find your next property?</h2>

                    <p>
                      Speak with our team about our developments, investment
                      opportunities and property solutions.
                    </p>

                    <Link to="/contact">
                      Contact Our Team
                    </Link>
                  </div>
                </section>
                <section className="featured-properties">
            <div className="section-heading">
                    <p>OUR PORTFOLIO</p>
                    <h2>Featured Properties</h2>
                    <p>
                      Explore a selection of thoughtfully designed spaces
                      developed by Vantage.
                    </p>
            </div>



        <div className="properties-grid">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;