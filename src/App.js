import React from "react";
import "./App.css";
import Navbar from "./components/TopContent/Navbar";
import TopContent from "./components/TopContent/TopContent";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import { useState, useEffect } from 'react';

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App  = () => {
  const [height, setHeight] = useState(false);
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const updateWindowHeight = () => {
    window.onscroll = () => {
      if (window.scrollY >= 180) {
        setHeight(true);
      } else if (window.scrollY > 0 || window.scrollY < 50) {
        setHeight(false);
      }
    }
  };

  useEffect(() => {
  updateWindowHeight();
  }, []);
    return (
      <div className="App">
        <Navbar height={height}/>
        {height && <button className="scrollTop-btn" onClick={scrollToTop}>Top</button>}
        <TopContent />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  
}

export default App;
