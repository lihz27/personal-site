import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TopContent from './components/TopContent/TopContent';
import AboutMe from './components/AboutMe/AboutMe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <TopContent/>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
