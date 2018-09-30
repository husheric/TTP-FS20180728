import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <div className='entry-container'>
        <div className='entry'>
          <h1>Register</h1>
          <div className='form'>
            <form>
              <div><input placeholder='name'/></div>
              <div><input type='email' placeholder='email'/></div>
              <div><input type='password' placeholder='password'/></div>
              <div className='form-submit'><input type='submit' value='Register'/></div>
            </form>
          </div>
          <div className='center-column'>
            <p>or</p>
            <Link to={'/login'}>
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;