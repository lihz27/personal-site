import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4 skills-list">
            <h3>Front-end Development</h3>
            <ul>
              <li>
                <i className="devicon-html5-plain dev" />
                <span>HTML</span>
              </li>
              <li>
                <i className="devicon-css3-plain dev" />
                <span>CSS</span>
              </li>
              <li>
                <i className="devicon-javascript-plain dev" />
                <span>Javascript</span>
              </li>
              <li>
                <i className="devicon-react-original dev" />
                <span>
                  React <br />
                  Redux
                </span>
              </li>

              <li>
                <i className="devicon-jquery-plain dev" />
                <span>JQuery</span>
              </li>
              <li>
                <i className="devicon-bootstrap-plain dev" />

                <span>Bootstrap</span>
              </li>
              <li>
                <i
                  className="fas fa-mobile-alt fa-2x"
                  id="responsive-design-icon"
                />
                <span>
                  Responsive <br />
                  Design
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-4 skills-list">
            <h3>Back-end Development</h3>
            <ul>
              <li>
                <i className="fab fa-node fa-2x" />
                <span>NodeJS</span>
              </li>
              <li>
                <i className="fas fa-server fa-2x" />
                <span>Express</span>
              </li>
              <li>
                <i className="fas fa-cogs fa-2x" />
                <span>Restful API</span>
              </li>
              <li>
                <i className="fas fa-database fa-2x" />
                <span>
                  MongoDB
                  <br />
                  MySQL
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-4 skills-list">
            <h3>Dev Tools</h3>
            <ul>
              <li>
                <i className="fab fa-git fa-2x" />
                <span>Git </span>
              </li>
              <li>
                <i className="fab fa-aws fa-2x" />
                <span>AWS</span>
              </li>
              <li>
                <i className="devicon-webpack-plain dev" />
                <span>
                  Webpack
                  <br />
                  Babel
                </span>
              </li>
              <li>
                <i className="fas fa-project-diagram fa-2x" />
                <span>
                  Agile <br />
                  Methodology
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
