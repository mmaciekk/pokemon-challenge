import React, {Component} from 'react'
import './index.css';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

class PokemonCard extends Component {

    matchTypeToBadge() {
        const types = this.props.type
        return types.map((type,index) => <span key={index} className={`${type} badge`}>{type}</span>)
    }

    render() {
        return (
            <Card>
                <CardImg top width="100%" src={this.props.img} alt={`${this.props.name} image`}/>
                <CardBody>
                    <CardTitle>#{this.props.num} {this.props.name}</CardTitle>
                    <CardText>{this.matchTypeToBadge()}</CardText>
                </CardBody>
            </Card>
        );
    }
};

export default PokemonCard;