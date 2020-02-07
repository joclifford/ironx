import React from 'react';
import {Card} from 'react-bootstrap';


let ImageCard = function(props){
    return (
      <Card >
          <Card.Img  variant="top" src={props.img}/>
          <Card.Text className="primaryBackGround imageCardText">{props.text}</Card.Text>
      </Card>
    )
 }

export default ImageCard;