import React from "react";
// import "./Modal.css";
import proj3Preview from "./rsz_12dealordealpreview.png";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="projectModal3"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="projectModal3"
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
                    src={proj3Preview}
                  />
                  <h1 className="fn">Deal Or No Deal</h1>

                  <p>
                    Game - Javasript, JQuery, CSS
                  </p>
                  <p>
                    <em>
                    Play a game of deal or no deal! This is a game I built initially after learning JQuery to reinforcement my knowledge.
                    </em>
                  </p>
                  <button type="button" className="modal-btn btn btn-info">
                    <a
                      href="https://lihz27.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                    </a>
                  </button>
                  <button type="button" className="modal-btn btn btn-primary">
                    <a
                      href="https://github.com/lihz27/deal-or-no-deal"
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
