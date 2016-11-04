import React from 'react';

import './Payment.css';

class Payment extends React.Component {
  render() {
    return(
      <div className='payment-section'>
        <div className='payment-white'>
          <div className='payment-text'>
            <div className='payment-title'>Thank you for riding with <span>Shyft</span>.</div>
            <img src='./img/userdash/screaming-kid1.jpg' />
            <div className='add-tip'>
              <div>No tip</div>
              <div>$1</div>
              <div>$2</div>
              <div>$5</div>
              <div>Other</div>
            </div>
            <div className='add-payment'>
              <div>Add Payment</div>
              <div className='grey-numbers'>*1234</div>
            </div>
            <div className='total-price-div'>
              $9.00
            </div>
            <div className='next-btn btn'>Next</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Payment;
