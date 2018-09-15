import React, { Component } from 'react';
import axios from 'axios';
import Content from '../Content';
import Header from '../../components/Header';

class PokemonPage extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      pokemonsCount: 0,
    };
  }

  componentDidMount() {
    this.fetchPokemons();
    this.getPokemonsCount();
  }

  getPokemonsCount() {
    const pokemonsMockLink = '//localhost:3001/pokemon';

    axios.get(pokemonsMockLink)
      .then((response) => {
        const count = Math.ceil(response.data.length / 12);
        this.setState({
          pokemonsCount: count,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  fetchPokemons() {
    const pokemonsMockLink = `//localhost:3001/pokemon?_page=${this.props.match.params.id}&_limit=12`;

    axios.get(pokemonsMockLink)
      .then((response) => {
        this.setState({
          pokemons: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { pokemons, pokemonsCount } = this.state;
    return (
      <div>
        <Header />
        <Content pokemons={pokemons} pokemonsCount={pokemonsCount} />
      </div>
    );
  }
}

export default PokemonPage;
