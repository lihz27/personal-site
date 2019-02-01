import React, { Component } from "react";
import Slider from "react-slick";
import proj1Preview from "../Projects/ProjectModals/rsz_project1modal.png";
import proj2Preview from "../Projects/ProjectModals/rsz_trailblazerpreview.png";
import proj3Preview from "../Projects/ProjectModals/rsz_12dealordealpreview.png";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
    <i className="fas fa-chevron-right fa-3x"></i>
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
    <i className="fas fa-chevron-left fa-3x"></i>
    </div>
  );
}

class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#projectModal1"
                >
                  <img
                    className="img-fluid"
                    src={proj1Preview}
                    alt="project preview"
                  />
                </a>
              </div>
              <div className="portfolio-caption">
                <h4> Zillwoah</h4>
                <p>Full-Stack Web App - React, MongoDB, NodeJS, NextJS, Websocket</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#projectModal2"
                >
                  <img
                    className="img-fluid"
                    src={proj2Preview}
                    alt="project preview"
                  />
                </a>
              </div>
              <div className="portfolio-caption">
                <h4> TrailBlazer</h4>
                <p>Full-Stack Web App - React, PostgreSQL, NodeJS, Bootstrap</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#projectModal3"
                >
                  <img
                    className="img-fluid"
                    src={proj3Preview}
                    alt="project preview"
                  />
                </a>
              </div>
              <div className="portfolio-caption">
                <h4> Deal Or No Deal</h4>
                <p>Game - Javascript, JQuery, className</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#exampleModal1"
                >
                  <img
                    className="img-fluid"
                    src="https://s3-us-west-1.amazonaws.com/project-image-preview/project1Modal.PNG"
                    alt="project preview"
                  />
                </a>
              </div>
              <div className="portfolio-caption">
                <h4> Zillwoah</h4>
                <p>Web app - MERN</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#exampleModal1"
                >
                  <img
                    className="img-fluid"
                    src="https://s3-us-west-1.amazonaws.com/project-image-preview/project1Modal.PNG"
                    alt="project preview"
                  />
                </a>
              </div>
              <div className="portfolio-caption">
                <h4> Zillwoah</h4>
                <p>Web app - MERN</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
