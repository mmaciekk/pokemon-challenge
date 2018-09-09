import React, { Component } from 'react'
import PokemonCard from '../../components/PokemonCard'

class Content extends Component {
    displayPokemons() {
        const pokemons = this.props.pokemons
        return (
            <div>
                {pokemons.map(
                    pokemon => (
                        <PokemonCard key={pokemon.id} name={pokemon.name} num={pokemon.num} img={pokemon.img} type={pokemon.type} />
                    )
                )}
            </div>
        )
    }


    render () {
        return (
            <div>
                {this.displayPokemons()}
            </div>
        )
    }
}

export default Content