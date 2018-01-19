import React, { Component } from 'react';
// import PeopleList from './PeopleList.js';

class PartTwo extends Component {
  constructor () {
    super();

    this.state = { items: [],
                   filter: ''
                 };

    this.onFilterChange = this.onFilterChange.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
  }

  /*
   * Initial API call before render.
   */
  componentWillMount () {
    const host = 'https://swapi.co/api/people'
    const conf = {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
      cache: 'default'
    };

    fetch(host, conf)
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}));
  }

  onFilterChange (e) {
    const filter = e.target.value.toLowerCase();
    this.setState({filter: filter});
  }

  handleFocusChange (e) {
    this.setState({focus: e})
  }

  render() {
    console.log(this.state)
    let characters = this.state.items;
    if(this.state.filter){
      characters = characters.filter( character => character.name.toLowerCase().includes(this.state.filter) )
    }

    return (
      <section className="wrapper">
        <input type='text' onChange={this.onFilterChange}></input>
        { characters.map( (character, index) =>
          <div
            key={character.name}
            onClick={ () => this.handleFocusChange(index)}>
            {character.name}
          </div>) }

      </section>
    );
  }
}

export default PartTwo;
