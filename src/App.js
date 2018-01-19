import React, { Component } from 'react';
import './App.css';

// import PartOne from './containers/PartOne/PartOne.js';
import PartTwo from './containers/PartTwo/PartTwo.js';

class App extends Component {
  render() {
    return (
      <main className="App">
        {/*<PartOne></PartOne>*/}
        <PartTwo></PartTwo>
      </main>
    );
  }
}

export default App;
