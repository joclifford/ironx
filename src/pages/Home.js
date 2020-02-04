import React from 'react';
import clark from '../images/clarky.jpg'
import dumpTruck from '../images/dumpTruck.jpg'
import backyard from '../images/backyard.jpg'

class Home extends React.Component {
    render() {
       return (
         <div className="App">
             <header className="App-header">
             <p>IronX Professionals</p>
             <img src={clark} className="App-logo" alt="logo" />
             <img src={dumpTruck} className="App-logo" alt="logo" />
             <img src={backyard} className="App-logo" alt="logo" />

             </header>
         </div>
       )
    }
 }
 export default Home;