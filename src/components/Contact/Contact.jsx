import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <form>
        <div className="form-group">
          <label for="input-email">Email Address</label>
          <input type="email" className="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Email">
            
          </input>
        </div>
        <div className="form-group">
          <label for="input-phone">Phone</label>
          <input type="text" className="form-control" id="input-phone" aria-describedby="phoneHelp" placeholder="Phone">
            
          </input>
        </div>
      </form>
    </section>
  );
};

export default Contact;