import React from 'react';
import {Link} from 'react-router';

import './Payment.css';

class Payment extends React.Component {
  constructor(props){
    super(props);

    this.onClickPinkDiv = this.onClickPinkDiv.bind(this);
  }

  onClickPinkDiv(e) {
    let x = document.getElementById(e.target.id);
    if(!x.classList.length){
      x.classList.add('pink-bg-div');
  }
  else {
    x.classList.remove('pink-bg-div');
  }
  }



  render() {
    return(
      <div className='payment-section'>
        <div className='payment-white'>
          <div className='payment-text'>
            <div className='payment-title'>Thank you for riding with <span>Shyft</span>.</div>
            <img src='./img/userdash/screaming-kid1.jpg' />
            <div className='add-tip'>
              <div onClick={this.onClickPinkDiv} id='no-tip'>No tip</div>
              <div onClick={this.onClickPinkDiv} id='1-dollar'>$1</div>
              <div onClick={this.onClickPinkDiv} id='2-dollars'>$2</div>
              <div onClick={this.onClickPinkDiv} id='5-dollars'>$5</div>
              <div onClick={this.onClickPinkDiv} id='other'>Other</div>
            </div>
            <div className='add-payment'>
              <div>Add Payment</div>
              <div className='grey-numbers'>*1234</div>
            </div>
            <div className='total-price-div'>
              $9.00
            </div>
            <div className='next-btn btn'><Link to='/userDashboard'>Next</Link></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Payment;
