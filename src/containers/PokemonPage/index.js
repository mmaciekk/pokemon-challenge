import React, { Component } from 'react'
import axios from 'axios'

class PokemonPage extends Component {
    state = {
        pokemons: []
    }


    componentDidMount () {
        this.fetchPokemons()
    }

    fetchPokemons () {
        const pokemonsMockLink = 'http://localhost:3001/pokemon'

        axios.get(pokemonsMockLink)
            .then(response => {
                let pokemons = response.data.map((pokemon,index) => {
                    return (
                        <div key={index}>
                            <h3>{pokemon.name}</h3>
                            <p>{pokemon.id}</p>
                        </div>
                    )
                })
                this.setState({pokemons: pokemons})
            })
            .catch(error => {
                console.error(error)
            })

    }



    render () {
        return (
            <div>
                {this.state.pokemons}
            </div>
        )
    }
}

export default PokemonPage