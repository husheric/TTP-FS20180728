import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <div className='header'>
      	<div className='header-portfolio'>
	        <Link to={'/portfolio'}>
	          Portfolio
	        </Link>
	       </div>
	       <div className='header-transactions'>
	        <Link to={'/transactions'}>
	          Transactions
	        </Link>
	       </div>
      </div>
    );
  }
}

export default Header;
