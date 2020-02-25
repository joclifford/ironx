import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/pages/Home';
import Home2 from './components/pages/Home2';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div style={{backgroundColor:'#252c3a'}}>
        <NavBar/>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} component={Home} exact/>
          <Route path={process.env.PUBLIC_URL + '/home2'} component={Home2} exact/>
          <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
          <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
          <Redirect from='*' to={process.env.PUBLIC_URL + '/'} />
        </Switch>
      </div>
    )
 }
}

export default App;
