import React from 'react';
import {Card} from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Images from '../utils/Images'



let CarouselCard = function(props){
    let imagesToShow = [];
    console.log(props.group)
    Images.forEach(function (item, index) {
        if (item.group === props.group){
            imagesToShow.push(item);
        }
    });
    console.log(imagesToShow)
    return (
        <Card style={{maxHeight: '20px !important'}}>
            <Carousel showThumbs={false} centerMode centerSlidePercentage={80} infiniteLoop autoPlay swipeable={true} interval={3000}>
                { 
                  imagesToShow.map(({id, src, title, description}) =>             
                      <img key={src} src={src} title={title} alt={description} />
                 )
                    
                }
       
            </Carousel>
            
        </Card>
    )
}


export default CarouselCard;