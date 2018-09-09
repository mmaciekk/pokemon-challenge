import React, {Component} from 'react'
import axios from 'axios'
import Content from '../../containers/Content'

class PokemonPage extends Component {
    state = {
        pokemons: []
    }


    componentDidMount() {
        this.fetchPokemons()
    }

    fetchPokemons() {
        const pokemonsMockLink = 'http://localhost:3001/pokemon'

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




render()
{
    return (
        <div>
            <Content pokemons={this.state.pokemons} />
        </div>
    )
}
}

export default PokemonPage