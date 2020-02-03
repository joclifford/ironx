import React from 'react';
import clark from '../images/clarky.jpg'

class Home extends React.Component {
    render() {
       return (
         <div className="App">
             <header className="App-header">
             <p>IronX Professionals</p>
             <img src={clark} className="App-logo" alt="logo" />
             </header>
         </div>
       )
    }
 }
 export default Home;