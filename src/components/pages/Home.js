import React from 'react';
import clark from '../../images/clarky.jpg'
import dumpTruck from '../../images/dumpTruck.jpg'
import backyard from '../../images/backyard.jpg'

let Home = function(){
       return (
         <div className="App">
             <div className="App-container">
              <p>IronX Professionals</p>
              <img src={clark} className="App-logo" alt="logo" />
              <img src={dumpTruck} className="App-logo" alt="logo" />
              <img src={backyard} className="App-logo" alt="logo" />
             </div>
         </div>
       )
    }
 
 export default Home;