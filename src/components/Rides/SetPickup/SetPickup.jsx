import React from 'react';
import './SetPickup.css';

class SetPickup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

  }

}







    render(){
        return (
          <div className='SetPickUp main-wrapper'>
            <div className='request'>
              <div className='the-estimate-box'>
                    <div className='outer-container-for-current-adrress'>
                          <div className='arrow-inside-of-small-div'> ^ </div>
                          <div className='main-wrapper-for-all-content'>
                            <input type='text' className='inner-container-for-current-adrress' value={this.props.address} />
                             <div className='Pickup-location-container-for-current-adrress'>
                              Pickup Location
                             </div>
                         </div>
                   </div>
               </div>
              <div className='SetPickup_btn' onClick={this.props.changeToRequest}>Set PickUp</div>
            </div>
          </div>
        );
    }
};

export default SetPickup;
