import React from "react";
import logo from "./logo.svg";
import $ from "jquery";

const Navbar = ({ height }) => {
  const scrollToElement = e => {
    e.preventDefault();
    $("html, body")
      .stop()
      .animate({ scrollTop: $(e.target.hash).offset().top - 80 }, 1000);
  };

  return (
    <div>
      <nav
        id="top-navbar"
        className={
          height
            ? "navbar fixed-top navbar-expand-lg navbar-dark "
            : "navbar fixed-top navbar-expand-lg navbar-dark transparent-bg"
        }
      >
        <a className="navbar-brand" href="/">
          <img className="logo" src={logo} alt="logo" />
          <span>Jack Li</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-pills ml-auto">
            <li
              className={
                height >= 485 && height < 988 ? "nav-item active" : "nav-item"
              }
            >
              <a className="nav-link" href="#aboutMe" onClick={scrollToElement}>
                About Me <span className="sr-only">(current)</span>
              </a>
            </li>
            <li
              className={
                height >= 988 && height < 1380 ? "nav-item active" : "nav-item"
              }
            >
              <a className="nav-link" href="#skills" onClick={scrollToElement}>
                Skills
              </a>
            </li>
            <li
              className={
                height >= 1380 && height < 1600 ? "nav-item active" : "nav-item"
              }
            >
              <a
                className="nav-link"
                href="#projects"
                onClick={scrollToElement}
              >
                Projects
              </a>
            </li>
            <li className={height >= 1600 ? "nav-item active" : "nav-item"}>
              <a className="nav-link" href="#contact" onClick={scrollToElement}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
