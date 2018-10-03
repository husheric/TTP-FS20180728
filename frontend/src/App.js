import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Login from './Components/Login';
import Register from './Components/Register';
import Portfolio from './Components/Portfolio';
import Transactions from './Components/Transactions';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: true,
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
        <Route path='/transactions' component={Transactions} />
      </Switch>
    );
  }
}

export default App;
