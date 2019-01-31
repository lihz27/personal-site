import React from "react";
// import "./Modal.css";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="projectModal1"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
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
                  <div className="col-md-12">
                  <div className="modal-body">

                    <img
                      className="img-fluid"
                      alt="project-preview"
                      src="http://www.popsci.com/sites/popsci.com/files/styles/large_1x_/public/blap2016001010_col-crop.jpg?itok=YqtoN5Gh&fc=50,50"
                    />
                    <h1 className="fn">Zillwoah</h1>

                    <p>
                      Full-Stack Web Application - React, MongoDB, NextJS,
                      WebSocket, Progressive Web App (PWA), Bootstrap, deployed
                      in AWS EC2.
                    </p>
                    <p>
                      <em>
                        A real estate marketing app integrated with real time
                        messenger functionality
                      </em>
                    </p>
                    <button type="button" className="modal-btn btn btn-info">
                      <a href="#">View Live</a>
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
