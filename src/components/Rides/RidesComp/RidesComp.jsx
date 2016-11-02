import React from 'react';
import RequestRides from '../RequestRides/RequestRides.jsx';
import MapComp from '../RidesMap/MapComp.jsx';

import './RidesComp.css';



class Rides extends React.Component{
    render(){
        return (
            <div>
            
                <RequestRides />

            </div>
        );
    }
};

export default Rides;
