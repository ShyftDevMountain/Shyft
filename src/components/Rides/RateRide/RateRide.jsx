import React from 'react';

import './RateRide.css';

import {getRideId} from '../Cancel/cancelFunctions.js';
import {rateRide} from './rateFunctions.js';


class RateRide extends React.Component {
  constructor(props) {
    super(props);


    this.onClickStar = this.onClickStar.bind(this);
    this.onClickNext = this.onClickNext.bind(this);

  }

  onClickStar(e) {
    this.rating = e.target.id;
    let x = document.getElementById(e.target.id);
    if(!x.classList.length){
    x.classList.add('colored-star');
  }
  else{
    x.classList.remove('colored-star');
  }
  }


  onClickNext() {
    var self = this;
    getRideId().then(function(res){
         let objToSend = {
           rideid: res.data[0].rideid,
           rating: self.rating,
           destdate: new Date().getTime()
         }
         rateRide(objToSend);
         self.props.changeToPayment();
    })

  }

  render() {
    return(
      <div className='RateRide'>
        <div className='request'>
          <div className='the-estimate-box'>
            <div className='car-type-div'>
              <div>
              <img src='https://www.lyft.com/images/cities/classic.6d006a8c.png' />
              </div>
              <div className='ride-type-section'>
              <p className='ride-type-title'>shyft</p>
              <p className='ride-type-desc'></p>
              </div>
            </div>
            <div className='eta-and-cost'>
              <div className='You-have-arrived'>
                You have arrived at your destination.
              </div>
            </div>

            <div className='Rate-Your-Driver-Box'>
              <div className='rate-your-driver-inner'>
                Rate Your Driver
                <div className='stars-container'>
                  <div className="rating">
                    <span onClick={this.onClickStar} id='1'>☆</span><span onClick={this.onClickStar} id='2'>☆</span><span onClick={this.onClickStar} id='3'>☆</span><span onClick={this.onClickStar} id='4'>☆</span><span onClick={this.onClickStar} id='5'>☆</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='request-shyft-btn btn' onClick={this.onClickNext}>Next</div>
        </div>
      </div>
    )
  }
}

export default RateRide;
