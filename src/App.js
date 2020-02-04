import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <main>
        <NavBar/>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} component={Home} exact/>
          <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
          <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
          <Redirect from='*' to={process.env.PUBLIC_URL + '/'} />
        </Switch>
      </main>
    )
 }
}

export default App;
