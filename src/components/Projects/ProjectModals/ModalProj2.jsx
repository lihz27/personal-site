import React from "react";
// import "./Modal.css";
import proj2Preview from "./rsz_trailblazerpreview.png";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="projectModal2"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="projectModal2"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="modal-body">
                  <img
                    className="img-fluid"
                    alt="project-preview"
                    src={proj2Preview}
                  />
                  <h1 className="fn">TrailBlazer</h1>

                  <p>
                    Full-Stack Web Application focusing on database scalability - React, Postgresql, deployed in
                    AWS EC2.
                  </p>
                  <p>
                    <em>
                      Inherited a legacy codebase and optimized its backend server to handle traffic rate of 10,000 requests persecond
                    </em>
                  </p>
                  <button type="button" className="modal-btn btn btn-info">
                    <a
                      href="https://www.brian-louie.online"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                    </a>
                  </button>
                  <button type="button" className="modal-btn btn btn-primary">
                    <a
                      href="https://github.com/Only-the-Best/SDC-ProductComparisons"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </button>
                  <button
                    type="button"
                    className="modal-btn btn btn-warning"
                    data-dismiss="modal"
                  >
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
