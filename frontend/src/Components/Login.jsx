import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <div>Login </div>
        <div>
          <form>
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <input type='submit' value='Log In' />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
