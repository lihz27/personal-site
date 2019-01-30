import React from "react";
import logo from "./logo.svg";
import $ from "jquery";

const Navbar = ({ height }) => {

  const scrollToElement = e => {
    const scrollTarget = e.target.getAttribute("href");
    $("html, body")
      .stop()
      .animate({ scrollTop: $(scrollTarget).offset().top - 80 }, 1000);
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
          
            <li className="nav-item">
              <a className="nav-link" href="#aboutMe">
                About Me <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={scrollToElement}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={scrollToElement}
              >
                Projects
              </a>
            </li>
           
            <li className="nav-item">
              <a
                className="nav-link"
                href="#Blog"
                onClick={scrollToElement}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={scrollToElement}>
                Contact
              </a>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
