import React, {Component} from 'react'
import PokemonCard from '../../components/PokemonCard'
import {Container, Col, Row} from 'reactstrap'
import './index.css';

class Content extends Component {
    displayPokemons() {
        const pokemons = this.props.pokemons
        const pokemonsFours = pokemons.map((x,i) => {
            return i % 4 === 0 ? pokemons.slice(i, i+4) : null;
        }).filter(x => x != null);

        return (
            <Container>
                {pokemonsFours.map((pokemonsFours, index) => {
                    return (<Row key={index}>
                                {pokemonsFours.map((pokemon,index) =>
                            <Col key={index} xs={12} sm={12} md={3} lg={3}>
                            <PokemonCard
                                key={pokemon.id}
                                name={pokemon.name}
                                num={pokemon.num}
                                img={pokemon.img}
                                type={pokemon.type}/>
                            </Col>)}
                    </Row>);
                })}
            </Container>
        )
    }


    render() {
        return (
            <div>
                {this.displayPokemons()}
            </div>
        )
    }
}

export default Content