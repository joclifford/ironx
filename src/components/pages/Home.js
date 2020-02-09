import React from 'react';
import ImageCard from '../ImageCard';
import {Container, Row, Col} from 'react-bootstrap';
import clark from '../../images/clarky.jpg'
import dumpTruck from '../../images/dumpTruck.jpg'
import backyard from '../../images/backyard.jpg';
import frontYard from '../../images/frontYard.jpg';

let Home = function(){


       return (
         <div className="App" >
             <div className="App-container">
              <Container> 
                 <Row style={{marginBottom:"100px", marginTop:"50px"}}>
                  <ImageCard animation="fade-up" img={dumpTruck} />
                </Row>
                <Row className="justify-content-md-center gridRow">
                    <Col lg={true}>
                      <ImageCard animation="fade-up" img={clark} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
                    </Col>
                    <Col lg={true}>
                      <ImageCard animation="fade-up" img={frontYard}  text={"Praesent semper feugiat nibh sed pulvinar proin. Feugiat in fermentum posuere urna nec tincidunt. A iaculis at erat pellentesque. Donec massa sapien faucibus et. Eget mauris pharetra et ultrices neque. Facilisis magna etiam tempor orci eu lobortis elementum. Pellentesque pulvinar pellentesque habitant morbi. Mattis aliquam faucibus purus in massa tempor nec feugiat. Dui nunc mattis enim ut. Imperdiet proin fermentum leo vel orci porta non. Ac felis donec et odio pellentesque."} />
                    </Col>
                    <Col lg={true}>
                      <ImageCard animation="fade-up" img={backyard} text={"Volutpat consequat mauris nunc congue nisi. Sit amet nisl purus in mollis nunc sed id. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Dictum at tempor commodo ullamcorper. Tortor posuere ac ut consequat semper viverra. Adipiscing tristique risus nec feugiat in. Vulputate mi sit amet mauris. Porttitor massa id neque aliquam vestibulum. Dignissim enim sit amet venenatis urna cursus eget. Suspendisse faucibus interdum posuere lorem. At varius vel pharetra vel turpis nunc eget lorem dolor. In arcu cursus euismod quis viverra nibh. Diam vulputate ut pharetra sit amet aliquam id diam."} />
                    </Col>
                </Row>
              </Container>
             </div>
         </div>
       )
    }
 
 export default Home;