import React from 'react';
import {Card} from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageLibrary from '../utils/imageUtil';

let CarouselCard = function(props){
    let imageLibrary = ImageLibrary();
    return (
        <Card>
            <Carousel infiniteLoop autoPlay swipeable={true} interval={5000}>
                {
                 imageLibrary[props.imageKey].map(function(element, index) {
                    return(
                        <div key={index}>
                            <img src={element.src} alt="clark"/>
                            <p className="legend">{element.desc}</p>
                        </div> 
                    )
                })   
            }         
            </Carousel>
            
        </Card>
    )
}


export default CarouselCard;