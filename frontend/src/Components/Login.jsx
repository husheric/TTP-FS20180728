import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className='entry-container'>
        <div className='entry'>
          <h1>Login</h1>
          <div className='form'>
            <form>
              <div><input type='email' placeholder='email' name='email' onChange={onChange} /></div>
              <div><input type='password' placeholder='password' name='password' onChange={onChange} /></div>
              <div className='form-submit'><input type='submit' value='Log In' onChange={onChange} /></div>
            </form>
          </div>
          <div className='center-column'>
            <p>or</p>
            <Link to={'/register'}>
              Register
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
