import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <div>
        <div>Register</div>
        <div>
          <form>
            <input placeholder='name' />
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <input type='submit' value='Register' />
          </form>
        </div>
        <div>
          <p>or</p>
          <Link to={'/login'}>
            Login
          </Link>
        </div>
      </div>
    );
  }
}

export default Register;
