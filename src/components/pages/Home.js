import React from 'react';
import ImageCard from '../ImageCard';
import {Container, Row} from 'react-bootstrap';
import CarourselCard from '../CarouselCard';
import "react-responsive-carousel/lib/styles/carousel.min.css";


let Home = function(){
       return (
         <div className="App" >
             <div className="App-container">
              <Container> 
                <Row style={{width:'100%',marginBottom:"10%",marginTop:"10%"}}>
                  <CarourselCard group='job2'/>
                </Row>
                <Row >
                  <CarourselCard group='job1'/>
                </Row>
                 <Row style={{marginBottom:"100px", marginTop:"50px"}}>
                  <ImageCard animation="fade-up" img='/images/dumpTruck.jpg' />
                </Row>
                <Row className=" gridRow">
                </Row>
              </Container>
   
             </div>
         </div>
       )
    }
 
 export default Home;