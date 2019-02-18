import React from "react";
import SocialButtons from "../Utils/SocialButtons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-2">
            <SocialButtons/>
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
