import React from "react";

const AboutMe = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-list">
        <div className="front-end-skills">
          <span>Front - end</span>
          <ul>
            <li>
              <i className="fab fa-html5 fa-3x" />
              <span>HTML</span>
            </li>
            <li>
              <i className="fab fa-css3-alt fa-3x" />
              <span>CSS</span>
            </li>
            <li>
              <i className="fab fa-js-square fa-3x" />
              <span>Javascript</span>
            </li>
            <li>
              <i className="fab fa-react fa-3x" />
              <span>React</span>
            </li>
            <li>
              <i
                className="fas fa-mobile-alt fa-3x"
                id="responsive-design-icon"
              />
              <span>
                Responsive <br />
                Design
              </span>
            </li>
          </ul>
          <div className="back-end-skills">
            <span>Back - end</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
