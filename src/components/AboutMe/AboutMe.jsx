import React from "react";

const AboutMe = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-list">
      {/* <div className="testFlex">
        <span>Front-End</span>
        <span>Back-End</span>
        <span>Dev-Tools</span>
      </div> */}
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
          <div className="front-end-skills">
            <span>Back - end</span>
            <ul>
              <li>
                <i className="fab fa-node fa-3x" />
                <span>NodeJS</span>
              </li>
              <li>
                <i className="fas fa-server fa-3x" /> 
                <span>Express</span>
              </li>
              <li>
                <i className="fas fa-cogs fa-3x" /> 
                <span>Restful API</span>
              </li>
              <li>
                <i className="fas fa-database fa-3x" /> 
                <span>SQL<br/>NoSQL<br/> Database</span>
              </li>
            </ul>
          </div>
          <div className="front-end-skills">
            <span>Dev Tools</span>
            <ul>
              <li>
              <i class="fab fa-git fa-3x"></i>
                <span>Git</span>
              </li>
              <li>
                <i className="fab fa-aws fa-3x" /> 
                <span>AWS</span>
              </li>
              <li>
                <i className="fas fa-cogs fa-3x" /> 
                <span>Webpack<br/>Babel</span>
              </li>
              <li>
                <i className="fas fa-project-diagram fa-3x" /> 
                <span>Agile Methodology</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
