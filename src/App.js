import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PartOne from './containers/PartOne/PartOne.js';

class App extends Component {
  render() {
    return (
      <main className="App">
        <PartOne></PartOne>
      </main>
    );
  }
}

export default App;
