import React from 'react';
import './RidesComp.css';

import RequestRides from '../RequestRides/RequestRides.jsx';
import MapComp from '../RidesMap/MapComp.jsx';


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
