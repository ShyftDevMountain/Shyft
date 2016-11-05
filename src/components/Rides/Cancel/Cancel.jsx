import React from 'react';

import './Cancel.css';

class Cancel extends React.Component {

  componentDidMount() {
    this.props.changeToStart();
  }

  render() {
    return (
      <div className='cancel-section'>
        <div className='the-white-box'>
            <div className='car-img-cancel'>
            <img src='https://www.lyft.com/images/cities/classic.6d006a8c.png' />
          </div>
          <div className='confirmation-eta'>
          <p>Awesome! Your Shyft ride will be here in approximately 2 minutes!</p>
          </div>
        </div>
            <div className='cancel-shyft-btn btn'>Cancel Ride</div>

        </div>
    )
  }
}

export default Cancel;
