import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Container, Pagination, PaginationItem, PaginationLink, Row,
} from 'reactstrap';

import PokemonCard from '../../components/PokemonCard';
import './index.css';

class Content extends Component {
  getPaginationItems() {
    const pages = [];
    const { pokemonsCount } = this.props;
    for (let i = 1; i <= pokemonsCount; i += 1) {
      pages.push(
        <PaginationItem key={i}>
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
    const { pokemons } = this.props;
    const pokemonsFours = pokemons
      .map((x, i) => (i % 4 === 0 ? pokemons.slice(i, i + 4) : null))
      .filter(x => x != null);

    return (
      <Container>
        {pokemonsFours.map((four, index) => (
          // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md#when-not-to-use-it
          // eslint-disable-next-line
          <Row key={index}>
            {four.map(pokemon => (
              <Col key={pokemon.id} xs={12} sm={12} md={3} lg={3}>
                <PokemonCard
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  num={pokemon.num}
                  img={pokemon.img}
                  types={pokemon.type}
                  spawnChance={pokemon.spawn_chance}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  weaknesses={pokemon.weaknesses}
                />
              </Col>
            ))}
          </Row>
        ))}
        <div className="pagination-container">
          <Pagination aria-label="Page navigation example" className="pagination">
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

Content.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
  pokemonsCount: PropTypes.number.isRequired,
};

Content.defaultProps = {
  pokemons: [{}],
};

export default Content;
