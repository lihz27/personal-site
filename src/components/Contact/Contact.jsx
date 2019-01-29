import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const API_PATH = "http://localhost/test.php";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };
    setSubmitStatus(!submitStatus);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    // axios({
    //   method: "post",
    //   url: `${API_PATH}`,
    //   headers: { "content-type": "application/json" },
    //   data: data
    // }).then(result => {
    //   setSubmitStatus(!submitStatus);
    //   setName("");
    //   setEmail("");
    //   setPhone("");
    //   setMessage("");
    // })
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
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
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
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                    placeholder="Phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="FormControlTextarea" className="contact-labels">
                  <i className="fas mr-2 fa-edit" />
                  Message
                </label>
                <textarea
                  className="form-control contact-input"
                  id="FormControlTextarea1"
                  placeholder="Message"
                  rows="8"
                  aria-label="Message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="submit-btn">
                <button type="submit" className="btn contact-submit">
                  Submit
                </button>
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
                  <strong>
                    Thank you. <br /> Your message has been sent.
                  </strong>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
