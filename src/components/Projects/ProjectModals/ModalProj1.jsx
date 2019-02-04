import React from "react";
// import "./Modal.css";
import proj1Preview from "./rsz_project1modal.png";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="projectModal1"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="projectModal1"
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
                    src={proj1Preview}
                  />
                  <h1 className="fn"><u>Zillwoah</u></h1>

                  <p>
                    Full-Stack Web Application - React, MongoDB, NextJS,
                    WebSocket, Progressive Web App (PWA), Bootstrap, deployed in
                    AWS EC2.
                  </p>
                  <p>
                    <em>
                      A real estate marketing app integrated with real time
                      messenger functionality
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
                      href="https://github.com/lihz27/PWA-MessengerApp"
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
