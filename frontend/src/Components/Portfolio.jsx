import React, { Component } from 'react';

import Header from './Header';

const data = [
  { ticker: 'AAPL', shares: 6, price: '11' },
  { ticker: 'STWD', shares: 40, price: '12' },
  { ticker: 'NTFX', shares: 86, price: '13' },
  { ticker: 'MSFT', shares: 16, price: '14' },
  { ticker: 'ATT', shares: 101, price: '15' }
];

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='portfolio-title'>
          <h1>Portfolio</h1>
        </div>
        <div className='portfolio-body'>
          <div className='portfolio-listing'>
            {data.map(el => (
              <div className='portfolio-stock'>{el.ticker} - {el.shares} - ${el.price}</div>
            ))}
          </div>
          <div className='portfolio-buy'>
            <h1>Cash - $5000</h1>
            <form>
              <div><input placeholder='ticker' name='ticker' /></div>
              <div><input placeholder='amount' name='amount'/></div>
              <div><input type='submit' value='Buy' /></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
