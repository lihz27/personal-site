import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
          <div className="portfolio">
          <a
              className="portfolio-link"
              data-toggle="modal"
              href="#exampleModal1"
            >
              <img
                className="img-fluid"
                src="https://s3-us-west-1.amazonaws.com/project-image-preview/project1Modal.PNG"
                alt="project preview"
              />
             
            </a>
          </div>
          <div className="portfolio-caption">
                <h4> Zillwoah</h4>
                <p>Web app - MERN</p>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
