import React, { Component } from 'react';

import Header from './Header';

const data = [
  { ticker: 'AAPL', shares: 6, price: '11' },
  { ticker: 'STWD', shares: 40, price: '12' },
  { ticker: 'NTFX', shares: 86, price: '13' },
  { ticker: 'MSFT', shares: 16, price: '14' },
  { ticker: 'ATT', shares: 101, price: '15' }
];

class Transactions extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='transactions-title'>
          <h1>Transactions</h1>
        </div>
        <div className='transactions-listing'>
          {data.map(el => (
            <div className='transactions-stock'>{el.ticker} - {el.shares} - ${el.price}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Transactions;
