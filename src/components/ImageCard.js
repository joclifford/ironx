import React from 'react';
import {Card} from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css'; 


let ImageCard = function(props){
  AOS.init({
    mirror : true
  });

    return (
      <Card data-aos={props.animation} data-aos-delay="5" data-aos-duration="500" border="light">
          <Card.Img  variant="top" src={props.img}/>
          <Card.Text className="primaryBackGround imageCardText">{props.text}</Card.Text>
      </Card>
    )
 }

export default ImageCard;