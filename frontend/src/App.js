import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Login from './Components/Login';
import Register from './Components/Register';
import Portfolio from './Components/Portfolio';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    }
  }

  render() {
    const { user } = this.state;
    return (
      <Switch>
        <Route exact path='/' render={() => (
          !user ? (
            <Redirect to='/Login'/>
          ) : (
            <Redirect to='/Portfolio'/>
          )
        )}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/portfolio' component={Portfolio}/>
      </Switch>
    );
  }
}

export default App;
