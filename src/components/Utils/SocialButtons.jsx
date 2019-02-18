import React from "react";

const SocialButtons = () => {
  return (
    <div>
      <ul className="profile social-media-buttons">
        <li>
          <a
            href="https://www.linkedin.com/in/jack-li-01051/"
            title="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/lihz27"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x" />
          </a> 
        </li>
        <li>
          <a href="#" title="Facebook">
            <i className="fab fa-facebook-f fa-2x" />
          </a>
        </li>
        <li>
          <a href="#" title="Twitter">
            <i className="fab fa-twitter fa-2x" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialButtons;
