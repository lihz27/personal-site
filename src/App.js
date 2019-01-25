import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/TopContent/Navbar";
import TopContent from "./components/TopContent/TopContent";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import { useState, useEffect } from 'react';

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App  = () => {
  const [height, setHeight] = useState(false);
  const updateWindowHeight = () => {
    window.onscroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 200) {
        setHeight(true);
        // setSlider('');
      } else if (window.scrollY > 0 || window.scrollY < 50) {
        setHeight(false);
        // setSlider('');
      }
    }
  }

  useEffect(() => {
  updateWindowHeight();
  }, []);
    return (
      <div className="App">
        <Navbar height={height}/>
        <TopContent />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  
}

export default App;
