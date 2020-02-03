import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <main>
        <NavBar/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </main>
    )
 }
}

export default App;
