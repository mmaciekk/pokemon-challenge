import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

const PokemonCard = (props) => {
    return (
            <Card  margin-bottom="10px">
                <CardImg top width="100%" src={props.img} alt={`${props.name} image`} />
                <CardBody>
                    <CardTitle>#{props.num} {props.name}</CardTitle>
                    <CardText>{props.type.join(' ')}</CardText>
                </CardBody>
            </Card>
    );
};

export default PokemonCard;