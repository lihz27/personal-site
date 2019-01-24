import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-2">
            <ul className="social-media-buttons">
              <li>
                <a href="https://www.linkedin.com/in/jack-li-01051/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in fa-2x" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-github fa-2x" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f fa-2x" />
                </a>
              </li>
            </ul>
          </div>
         
        </div>
      </div>
      <div className="copyright text-center">
            <p>© Designed by Jack Li 2019</p>
          </div>
    </footer>
  );
};

export default Footer;
