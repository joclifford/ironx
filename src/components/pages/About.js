import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ReactPageScroller from 'react-page-scroller';
import NavBar from '../NavBar';
import profiles from '../../utils/Profiles';



let About = function(){
  AOS.init({
    mirror : true
  });

  return (
    <div>
      <NavBar/>
      <ReactPageScroller renderAllPagesOnFirstRender={true}>
          <div className="ProfilePage BackhoeBg">
                <Card className="ProfileCard" data-aos='slide-up' data-aos-delay="5" data-aos-duration="500" border="light">
                  <h3 className="CenterText underlined">
                    <strong>Iron</strong> e<strong>X</strong>cavating
                  </h3>
                  <div>
                    This is just a quick blurb about the company of Iron Excavating. Run by Clark Bradley and Frank Goulding, these two can provide excellent service and quality work for all excavating needs.
                  </div>
                </Card>          
          </div>
          <div className="ProfilePage BackhoeSiteBg">
              <Card className="ProfileCard" >
                  <Row>
                    <Col>
                      <h3 className="CenterText underlined">{profiles.frank.name}</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col>                
                      <img src={profiles.frank.img} alt=''/>                    
                    </Col>
                    <Col>
                      {profiles.frank.description}
                    </Col>
                  </Row>
              </Card>
          </div>
          <div className="ProfilePage BackhoeBg">
               <Card className="ProfileCard">
                  <Row>
                    <Col>
                      <h3 className="CenterText underlined">{profiles.clark.name}</h3>
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Col>
                      <img src={profiles.clark.img} alt=''/>                      
                    </Col>
                    <Col>
                      {profiles.clark.description}
                    </Col>
                  </Row>
              </Card>
          </div>
        </ReactPageScroller>
      </div>
  )
}
 
 export default About;