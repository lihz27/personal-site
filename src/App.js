import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/TopContent/Navbar";
import TopContent from "./components/TopContent/TopContent";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <TopContent />
        <AboutMe />
        <Contact />
        <Footer/>
      </div>
    );
  }
}

export default App;
