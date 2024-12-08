import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

function Home() {
  return (
    <>
      <section className="hero_section">
        <div className="section_container">
          <div className="hero_container">
            <div className="text_section">
              <h2>Find your perfect Coffee</h2>
              <h3>Discover the Magic of the perfect cup</h3>
              <p>
                Welcome to our coffee paradise, where every bean tells a story and
                every cup sparks, And you can help it reach everyone.
              </p>

              <div className="hero_section_button">
                <Link to="/cafes" className="button">Find your perfect Cafe</Link>
                <Link to="/login" className="button">Got your own cafe?</Link>
              </div>
            </div>

            <div className="image_section">
              <img src="/cofffee_image.png" alt="Coffee" />
            </div>
          </div>
        </div>
      </section>

      <About />
      <Contact />
    </>
  );
}

export default Home;
