import React, {Component} from 'react'
import './index.css';
import {Card, CardBody, CardImg, CardText, CardTitle,  Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';

class PokemonCard extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }


    matchTypeToBadge() {
        const types = this.props.type
        return types.map((type, index) => <span key={index} className={`${type} badge`}>{type}</span>)
    }

    render() {
        return (
            <Card>
                <CardImg top width="100%" src={this.props.img} alt={`${this.props.name} image`}/>
                <CardBody>
                    <CardTitle>#{this.props.num} {this.props.name}</CardTitle>
                    <CardText>{this.matchTypeToBadge()}</CardText>
                    <Button id={`pop${this.props.id}`} onClick={this.toggle}>
                        Show more
                    </Button>
                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target={`pop${this.props.id}`} toggle={this.toggle}>
                        <PopoverHeader>Details</PopoverHeader>
                        <PopoverBody>
                            <h5> Weight: {this.props.weight}</h5>
                            <h5>Height: {this.props.height}</h5>
                            <h5>Weaknesses: {this.props.weaknesses.join(', ')}</h5>
                        </PopoverBody>
                    </Popover>
                </CardBody>
            </Card>
        );
    }
};

export default PokemonCard;