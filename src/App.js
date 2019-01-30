import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/TopContent/Navbar";
import TopContent from "./components/TopContent/TopContent";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollTopBtn from "./components/Footer/scrollTopBtn";
import AboutMe from "./components/AboutMe/AboutMe";

const App = () => {
  const [height, setHeight] = useState(false);

  const updateWindowHeight = () => {
    window.onscroll = () => {
      if (window.scrollY >= 180) {
        setHeight(true);
      } else if (window.scrollY > 0 || window.scrollY < 50) {
        setHeight(false);
      }
    };
  };

  useEffect(() => {
    updateWindowHeight();
  }, []);

  return (
    <div className="App">
      <Navbar height={height} />
      {height && <ScrollTopBtn />}
      <TopContent />
      <AboutMe/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
