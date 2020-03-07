import React from 'react';
import CarourselCard from '../CarouselCard';
import NavBar from '../NavBar'

import ReactPageScroller from 'react-page-scroller'

let Home = function(){
    return (
    <div>
      <NavBar/>
      <div className="App" >
          <div className="App-container">
          <ReactPageScroller >
            <CarourselCard group='job1'/>
            <CarourselCard group='job2'>
                <div className="CarouselTextLeft">
                Expert driveway installation and flattening. Lorem ipsum dolor sit amet, justo illum cotidieque est cu, ea tantas evertitur duo. 
                </div>
            </CarourselCard>
            <CarourselCard group='job3'>
              <div className="CarouselTextRight">
                Resources brought right to site for immediate installation. Lorem ipsum dolor sit amet, justo illum cotidieque est cu, ea tantas evertitur duo. 
                </div>
            </CarourselCard>
          </ReactPageScroller>
          </div>
      </div>
      </div>
    )
} 
export default Home;