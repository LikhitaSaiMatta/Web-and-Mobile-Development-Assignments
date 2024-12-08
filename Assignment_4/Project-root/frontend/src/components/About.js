import React from 'react';

function About() {
  return (
    <section className="about_us" id="about">
      <div className="section_container">
        <div className="about_container">
          <div className="text_section">
            <h2 className="section_title">About Us</h2>
            <p>
              At Coffee Corner, we believe that every cup of coffee tells a story,
              and every cafe has a unique ambiance waiting to be discovered. Our mission is to connect coffee lovers with the best
              cafes in town, providing a platform where experiences are shared and memories are made.
            </p>
          </div>

          <div className="image_section">
            <img src="/about_coffee.png" alt="coffee" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
