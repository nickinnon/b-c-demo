import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
  }

  filter (e) {
    this.setState({filter: e.target.value})
  }

  render() {
    const characters = this.props.characters;
    const list = characters.map( (character, index) => {
      return (
        <div key={index}>{character.name}</div>
      )
    });

    if (this.state.filter) {
      items = items.s
    }

    return (
      <input type='text'></input>
      <section>
        {list}
      </section>
    );
  }
}

export default App;
