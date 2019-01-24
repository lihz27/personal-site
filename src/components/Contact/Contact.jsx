import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="form-group">
                <label htmlFor="input-name" className="contact-labels"><i className="fa mr-2 fa-user"/>Name</label>
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
                <label htmlFor="input-email" className="contact-labels"><i className="fas mr-2 fa-envelope-open"/>Email</label>
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
                <label htmlFor="input-phone" className="contact-labels"><i className="fas mr-2 fa-phone"/>Phone</label>
                <input
                  type="text"
                  className="form-control contact-input"
                  id="input-phone"
                  aria-describedby="phoneHelp"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="FormControlTextarea" className="contact-labels"><i className="fas mr-2 fa-edit"/>Message</label>
                <textarea
                  className="form-control contact-input"
                  id="FormControlTextarea1"
                  placeholder="Message"
                  rows="6"
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
