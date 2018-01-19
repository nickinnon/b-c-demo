import React, { Component } from 'react';
// import PeopleList from './PeopleList.js';

class PartTwo extends Component {
  constructor () {
    super();

    this.state = { items: [],
                   filter: '',
                   focus: 0 //Default to 0
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
    let characters = this.state.items;
    let focusedCharacter = characters[this.state.focus];

    if(this.state.filter){
      characters = characters.filter( character => character.name.toLowerCase().includes(this.state.filter) )
    }

    return (
      <section className="wrapper">
        <input type='text' placeholder='search' onChange={this.onFilterChange}></input>
        { characters.map( (character, index) =>
          <h4
            key={character.name}
            onClick={ () => this.handleFocusChange(index)}>
            {character.name}
          </h4>) }

          <DataView character={focusedCharacter}></DataView>
      </section>


    );
  }
}

/*
 * Quick and dirty helper component TODO refactor later
 */
const DataView = (props) => {
  if(!props.character){ return(<span>Loading...</span>) }
  const features = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'];

  return(
    <div>
      <h2>{props.character.name}</h2>
      {features.map( feature =>
        <div key={feature}>
          <span><strong>{feature}: </strong></span>
          <span>{props.character[feature]}</span>
        </div>
      )}
    </div>
  )
}

export default PartTwo;
