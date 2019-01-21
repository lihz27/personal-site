import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TopContent from './components/TopContent/TopContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <TopContent/>
      </div>
    );
  }
}

export default App;
