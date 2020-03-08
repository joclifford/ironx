import React from 'react';
import {Card} from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Images from '../utils/Images'

let CarouselCard = function(props){
    let imagesToShow = [];

    Images.forEach(function (item, index) {
        if (item.group === props.group){
            imagesToShow.push(item);
        }
    });
    return (
        <Card >
            {props.children}
            <Carousel showThumbs={false} infiniteLoop autoPlay interval={7500} swipeable={false}>
                { 
                  imagesToShow.map(({id, src, srcset, title, description}) =>   
                      <div >          
                        <img key={src} sizes="(min-width: 800px) 1920px" src={src} srcset={srcset} title={title} alt={description} />
                      </div>
                 )    
                }
            </Carousel>
        </Card>
    )
}
export default CarouselCard;