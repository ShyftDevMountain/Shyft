import React from 'react';
import './RequestRides.css';


class RequestRides extends React.Component{

    render(){
        return (
            <div className='map'>
              <div className='RequestRides'>

                  <div className='second'>

                      <div className='fristBox'>
                          <div className='box_for_google_text'>
                          <div className='g'>G</div>
                          <div className='o'>o</div>
                          <div className='o2'>o</div>
                          <div className='g'>g</div>
                          <div className='l'>l</div>
                          <div className='o'>e</div>
                          </div>
                          <div className='gps'></div>
                      </div>

                      <div className='secondBox'>
                        <div className='car_icon'></div>

                      </div>

                      <div className='secondBox'>

                        <div>
                          Set PickUp 
                        </div>
                      </div>

                  </div>

              </div>
            </div>
        );
    }
};

export default RequestRides;
