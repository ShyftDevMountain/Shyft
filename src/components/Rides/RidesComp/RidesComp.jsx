import React from 'react';
import RequestRide from '../RequestRide/RequestRide.jsx';

import './RidesComp.css';


class Rides extends React.Component{
    render(){
        return (
            <div>
                This is the rides comp!
                <RequestRide />
            </div>
        );
    }
};

export default Rides;
