import React from "react";
import { useState, useEffect } from "react";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.reset) e.target.reset();
    setSubmitStatus(!submitStatus);
  };
  useEffect(() => {}, []);
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <h3>
        Send me a message, or email me at{" "}
        <a href="mailto:lihz01051@gmail.com">lihz01051@gmail.com</a>
      </h3>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group col-md-6">
                <div className="form-group">
                  <label htmlFor="input-name" className="contact-labels">
                    <i className="fa mr-2 fa-user" />
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="input-name"
                    aria-describedby="nameHelp"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="input-email" className="contact-labels">
                    <i className="fas mr-2 fa-envelope-open" />
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control contact-input"
                    id="input-email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="input-phone" className="contact-labels">
                    <i className="fas mr-2 fa-phone" />
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="input-phone"
                    aria-describedby="phoneHelp"
                    placeholder="Phone"
                    required
                  />
                </div>
               
                {submitStatus && (
                  <div className="col-lg-12 success-msg">
                    <button
                      type="button"
                      className="close"
                      aria-label="Close"
                      onClick={handleSubmit}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <strong>Your message has been sent.</strong>
                  </div>
                )}
                
              </div>
              <div className="form-group col-md-6">
                  <label
                    htmlFor="FormControlTextarea"
                    className="contact-labels"
                  >
                    <i className="fas mr-2 fa-edit" />
                    Message
                  </label>
                  <textarea
                    className="form-control contact-input"
                    id="FormControlTextarea1"
                    placeholder="Message"
                    rows="8"
                    required
                  />
                </div>
                <div className="submit-btn"><button type="submit" className="btn btn-dark">
                  Submit
                </button></div>
                
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
