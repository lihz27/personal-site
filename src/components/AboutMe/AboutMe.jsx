import React from "react";

const AboutMe = () => {
  return (
    <section id="aboutMe">
      <h2 className="section-title">About Me</h2>
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://jarrekk.github.io/Jalpc/static/assets/img/landing/avatar.jpg"
            id="profile-image"
            className="img-fluid"
            alt="profile-image"
          />
          <ul className="profile social-media-buttons">
            <li>
              <a
                href="https://www.linkedin.com/in/jack-li-01051/"
                title="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in fa-2x" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lihz27"
                title="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x" />
              </a>
            </li>
            <li>
              <a href="#" title="Facebook">
                <i className="fab fa-facebook-f fa-2x" />
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <i className="fab fa-twitter fa-2x" />
              </a>
            </li>
          </ul>
          <div className="cv-download-container col-md-12">
            <button
              className="cv-download-btn"
              data-toggle="modal"
              data-target="#exampleModal1"
            >
              <a>
                Download CV <i className="fa fa-download" />
              </a>
            </button>
          </div>
        </div>
        <div className="self-intro col-md-6">
          <h4>Hello, welcome to my site.</h4>
          <p>
            I am a full stack web developer whom hands-on development experience
            using React, JavaScript, NodeJS, HTML, CSS, and BootStrap.
          </p>
          <p>
            I am passionate about functionality, aesthetic design with easy to
            use user interface.
          </p>
          <p>
            My past experiences in electrical and electronic engeering field
            have helped me develop problem-solving skills, multi-tasking
            abilities, and attention to detail.
          </p>
          <p>
            Now, I am looking for a job opportunity in a team environment where
            I can continue my passion for tech, and while creating a product
            that clients love to use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;