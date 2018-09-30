import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Login from './Components/Login';
import Register from './Components/Register';
import Portfolio from './Components/Portfolio';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      name: '',
      email: '',
      password: ''
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { user } = this.state;
    console.log(this.state)
    return (
      <Switch>
        <Route exact path='/' render={() => (
          !user ? (
            <Redirect to='/Login' />
          ) : (
            <Redirect to='/Portfolio' />
          )
        )}/>
        <Route path='/login' render={() => <Login onChange={this.onChange} />} />
        <Route path='/register' render={() => <Register onChange={this.onChange} />} />
        <Route path='/portfolio' component={Portfolio} />
      </Switch>
    );
  }
}

export default App;
