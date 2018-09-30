import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Login from './Login';
import Register from './Register';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/' component={Login} />
      </Switch>
    );
  }
}

export default App;
