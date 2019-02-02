import React, { lazy, Suspense } from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/TopContent/Navbar";
import TopContent from "./components/TopContent/TopContent";
// import Skills from "./components/Skills/Skills";
// import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollTopBtn from "./components/Footer/scrollTopBtn";
import AboutMe from "./components/AboutMe/AboutMe";
import Modal from "./components/Projects/Modal";
// import ModalProj1 from "./components/Projects/ProjectModals/ModalProj1";
// import ModalProj2 from "./components/Projects/ProjectModals/ModalProj2";
// import ModalProj3 from "./components/Projects/ProjectModals/ModalProj3";

const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const ModalProj1 = lazy(() => import("./components/Projects/ProjectModals/ModalProj1"));
const ModalProj2 = lazy(() => import("./components/Projects/ProjectModals/ModalProj2"));
const ModalProj3 = lazy(() => import("./components/Projects/ProjectModals/ModalProj3"));

const App = () => {
  const [height, setHeight] = useState(false);
  const [renderSkills, setRenderSkills] = useState(false);

  const [renderProjects, setRenderProjects] = useState(false);

  const updateWindowHeight = () => {
    window.onscroll = () => {
      if (window.scrollY >= 180) {
        setHeight(window.scrollY);
        setRenderSkills(true);

      } 
      if (window.scrollY >= 500) {
        setRenderProjects(true);

      } 
      if (window.scrollY >= 800) {
        setRenderProjects(true);

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
      <AboutMe />
      {/* <Skills />
      <Projects /> */}

      { renderSkills? <Suspense fallback={<div>Loading...</div>}>
        <Skills />
      </Suspense>: null}
      { renderProjects ? <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>: null}

      <Modal />
      { renderProjects ? <Suspense fallback={<div>Loading...</div>}>
      <ModalProj1 />
      <ModalProj2 />
      <ModalProj3 />
      </Suspense>: null}
      
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
