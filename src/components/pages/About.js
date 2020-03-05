import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

let About = function(){
  AOS.init({
    mirror : true
  });

  let profiles = [
    {
      name : 'Frank Goulding',
      description: 'Frank Goulding Graduated from Western in 2017, and is a typical idiot. He basically coasted through university and spent most of his time smoking mary jane. Instrumental to the legalization in Canada, Frank once spent 4 days, with no food or water, outside of Justin Trudeau\'s house to convince him to make it part of his campaign. ',
      img: '../images/FrankGoulding.jpg',
      animation : 'slide-up'

    },
    {
      name : 'Clark Bradley',
      description: 'Clark loves his pizza. And Clark loves nothing more than eating pizza with STEAK. But thats not even his weirdest joy, he also loves wearing old shoes. Fun fact, he has never had a sip of beer.',
      img: '../images/ClarkBradly.jpg',
      animation : 'slide-up'
    }
  ]

  return (
      <div className="ProfilePage">
        <div className="ProfileContainer">
          <Row flex="1" >
            <Card className="ProfileCard" data-aos='slide-up' data-aos-delay="5" data-aos-duration="500" border="light">
              <h3>
                IronX
              </h3>
            </Card>
          </Row>          
          <Row>
            {
              profiles.map(({name, description, img, animation}) => 
                <Col>
                  <Card className="ProfileCard" data-aos={animation} data-aos-delay="5" data-aos-duration="500" border="light">
                      <Row>
                        <Col>
                          <h3 className="underlined">{name}</h3>
                        </Col>
                      </Row>
                      <Row style={{display:'flex',flexDirection: 'row'}}>                      
                        <Col>
                          <img src={img} alt=''/>
                        </Col>
                        <Col>
                          {description}
                        </Col>
                      </Row>
                  </Card>
                </Col>                
              )
            }
          </Row>
        </div>
      </div>
  )
}
 
 export default About;