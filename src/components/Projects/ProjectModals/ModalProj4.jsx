import React from "react";
import proj4Preview from "./rsz_personal-sitepreview.png";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="projectModal4"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="projectModal4"
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
                    src={proj4Preview}
                  />
                  <h1 className="fn">My Personal Website</h1>

                  <p>Personal Website - React，Boostrap，SPA</p>
                  <p>
                    <em>
                      A single page responsive webpage that I created for
                      myself. It's a on-going project that I'm looking to
                      constantly update and add new technology to.
                    </em>
                  </p>
                 
                  <button type="button" className="modal-btn btn btn-primary">
                    <a
                      href="https://github.com/lihz27/personal-site"
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
