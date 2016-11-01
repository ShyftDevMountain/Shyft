import React from 'react';
import RequestRide from '../RequestRide/RequestRide.jsx';

import './RidesComp.css';



class Rides extends React.Component{
    render(){
        return (
            <div>


                  <MapComp />
                  <RequestRides />



            </div>
        );
    }
};

export default Rides;
