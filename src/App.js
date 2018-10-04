import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Navbar, NavItem} from 'react-materialize';


import Home from './modules/Home';
import Subscription from './modules/Subscription';
import Search from './modules/Search';
import About from './modules/About';


class App extends Component {

  render() {

    return (
      <div className="App">
     <div className="NavBar">

  <Navbar brand='Automania' right className="blue">
  <NavItem href="/about">Quienes Somos</NavItem>
  <NavItem href="/search">Usuarios</NavItem>
</Navbar>

      </div>  
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Subscription" component={Subscription} />
            <Route path="/search" component={Search} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
    <div className="ElFooter">
  
<footer>© 2018 Copyright:
      <a href="https://github.com/Pablomartinn78">Automania</a>
    </footer>
      </div>    
      </div>
    );
  }
}

export default App;
