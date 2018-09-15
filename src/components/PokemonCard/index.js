import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import './index.css';
import {
  Card, CardBody, CardImg, CardText, CardTitle, Button, Popover, PopoverHeader, PopoverBody,
} from 'reactstrap';

class PokemonCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({ popoverOpen: !prevState.popoverOpen }));
  }

  matchTypeToBadge() {
    const { types } = this.props;
    return types.map(type => <span key={type} className={`badge-text ${type} badge `}>{type}</span>);
  }

  render() {
    const {
      img, name, num, id, weight, height, weaknesses,
    } = this.props;
    const { popoverOpen } = this.state;
    return (
      <Card key={id}>
        <CardImg top width="100%" src={img} alt={`${name} image`} />
        <CardBody>
          <CardTitle>
            #
            {num}
            {' '}
            {name}
          </CardTitle>
          <CardText>{this.matchTypeToBadge()}</CardText>
          <Button outline color="info" id={`pop${id}`} onClick={this.toggle}>
            Details
          </Button>
          <Popover
            placement="bottom"
            isOpen={popoverOpen}
            target={`pop${id}`}
            toggle={this.toggle}
          >
            <PopoverHeader>Details</PopoverHeader>
            <PopoverBody>
              <h5>
                {' '}
                Weight:
                {weight}
              </h5>
              <h5>
                Height:
                {height}
              </h5>
              <h5>
                Weaknesses:
                {weaknesses.join(', ')}
              </h5>
            </PopoverBody>
          </Popover>
        </CardBody>
      </Card>
    );
  }
}

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string),
  weaknesses: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};

PokemonCard.defaultProps = {
  types: [],
  weaknesses: [],
};

export default PokemonCard;
