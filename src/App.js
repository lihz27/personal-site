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
import Modal from "./components/Projects/Modal";
import ModalProj1 from "./components/Projects/ProjectModals/ModalProj1";
import ModalProj2 from "./components/Projects/ProjectModals/ModalProj2";
import ModalProj3 from "./components/Projects/ProjectModals/ModalProj3";

const App = () => {
  const [height, setHeight] = useState(false);

  const updateWindowHeight = () => {
    window.onscroll = () => {
      if (window.scrollY >= 180) {
        setHeight(window.scrollY);
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
      
      <Modal/>
      <ModalProj1/>
      <ModalProj2/>
      <ModalProj3/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
