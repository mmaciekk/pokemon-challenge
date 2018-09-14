import React, {Component} from 'react'
import axios from 'axios'
import Content from '../../containers/Content'
import Header from '../../components/Header';

class PokemonPage extends Component {
    state = {
        pokemons: []
    }


    componentDidMount() {
        this.fetchPokemons()
        this.getPokemonsCount()
    }

    fetchPokemons() {
        const pokemonsMockLink = `//localhost:3001/pokemon?_page=${this.props.match.params.id}&_limit=12`

        axios.get(pokemonsMockLink)
            .then(response => {
                 this.setState({
                     pokemons: response.data
                 })
            })
            .catch(error => {
                console.error(error)
            })
    }

  getPokemonsCount() {
    const pokemonsMockLink = `//localhost:3001/pokemon`

    axios.get(pokemonsMockLink)
      .then(response => {
          const count = Math.ceil(response.data.length / 12)
        this.setState({
          pokemonsCount: count
        })
      })
      .catch(error => {
        console.error(error)
      })
  }


render()
{
    return (
        <div>
            <Header/>
            <Content pokemons={this.state.pokemons} pokemonsCount={this.state.pokemonsCount} />
        </div>
    )
}
}

export default PokemonPage