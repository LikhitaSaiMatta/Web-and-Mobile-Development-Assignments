import React from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section_title">Contact Us</h2>
      <div className="section_container">
        <div className="contact_container">
          <div className="contact_form">
            <form action="#">
              <div className="field">
                <label htmlFor="Name">Full Name</label>
                <input type="text" id="Name" placeholder="Your Name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Your Email</label>
                <input type="text" id="email" placeholder="Your Email" required />
              </div>
              <div className="field">
                <label htmlFor="number">Your Number</label>
                <input type="number" id="number" placeholder="Your Contact Number" required />
              </div>
              <div className="field">
                <label htmlFor="textarea">Textarea</label>
                <textarea name="textarea" id="textarea" placeholder="Your Message"></textarea>
              </div>

              <button className="button" id="submit">Submit</button>
            </form>
          </div>

          <div className="contact_text">
            <div className="contact_items">
              <i className="bx bx-current-location"></i>
              <div className="contact_details">
                <h3>Our Location</h3>
                <p>Ontario, Canada</p>
              </div>
            </div>
            <div className="contact_items">
              <i className="bx bxs-envelope"></i>
              <div className="contact_details">
                <h3>General Enquiries</h3>
                <p>coffeecorner@xyz.com</p>
              </div>
            </div>
            <div className="contact_items">
              <i className="bx bxs-phone-call"></i>
              <div className="contact_details">
                <h3>Call Us</h3>
                <p>+1 9272823912</p>
              </div>
            </div>
            <div className="contact_items">
              <i className="bx bxs-time-five"></i>
              <div className="contact_details">
                <h3>Our Timing</h3>
                <p>Mon-Sun : 10:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;