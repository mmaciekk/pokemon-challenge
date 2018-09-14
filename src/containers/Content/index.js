import React, {Component} from 'react';
import {Col, Container, Pagination, PaginationItem, PaginationLink, Row} from 'reactstrap';

import PokemonCard from '../../components/PokemonCard';
import './index.css';

class Content extends Component {
  getPaginationItems() {
    const pages = [];
    for (let i = 1; i <= this.props.pokemonsCount; i++) {
      pages.push(
        <PaginationItem>
          <PaginationLink href={`/pokemon/${i}`}>
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }
    return (
      pages
    );
  }

  displayPokemons() {
    const pokemons = this.props.pokemons;
    const pokemonsFours = pokemons.map((x, i) => (i % 4 === 0 ? pokemons.slice(i, i + 4) : null)).filter(x => x != null);

    return (
      <Container>
        {pokemonsFours.map((pokemonsFours, index) => (
          <Row key={index}>
            {pokemonsFours.map((pokemon, index) => (
              <Col key={index} xs={12} sm={12} md={3} lg={3}>
                <PokemonCard
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  num={pokemon.num}
                  img={pokemon.img}
                  type={pokemon.type}
                  spawnChance={pokemon.spawn_chance}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  weaknesses={pokemon.weaknesses}
                />
              </Col>
            ))}
          </Row>
        ))}
        <div className='pagination-container'>
          <Pagination aria-label="Page navigation example" className='pagination'>
            {this.getPaginationItems()}
          </Pagination>
        </div>
      </Container>
    );
  }


  render() {
    return (
      <div>
        {this.displayPokemons()}
      </div>
    );
  }
}

export default Content;
