import React from "react";
import $ from "jquery";

const scrollTopBtn = () => {
  const scrollToTop = () => {
    $("html, body").animate({ scrollTop: 0 }, 500);
  };
  return (
    <button className="scrollTop-btn" onClick={scrollToTop} aria-label="scrollToTop">
      <i className="fas fa-angle-up fa-2x" />
    </button>
  );
};

export default scrollTopBtn;
