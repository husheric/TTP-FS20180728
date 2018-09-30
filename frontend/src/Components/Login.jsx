import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <div>
          <p>or</p>
          <Link to={'/register'}>
            Register
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
