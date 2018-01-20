import React, { Component } from 'react';

import PartOne from './containers/PartOne/PartOne.js';
import PartTwo from './containers/PartTwo/PartTwo.js';

class App extends Component {
  render() {
    const dividerStyle = {
      height: '5rem',
      backgroundColor: 'rgba(200,200,200,1)'
    };

    return (
      <main className="App">
        <PartOne></PartOne>
        <div style={dividerStyle}></div>
        <PartTwo></PartTwo>
      </main>
    );
  }
}

export default App;
