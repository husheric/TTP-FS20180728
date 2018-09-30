import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default Register;
