import React from 'react';
import './RidesComp.css';

import MainJumbotron from '../../Home/MainJumbotron/MainJumbotron.jsx';
import RequestRides from '../RequestRides/RequestRides.jsx';


class Rides extends React.Component{
    render(){
        return (
            <div>

                  <MainJumbotron />
                  <RequestRides />


            </div>
        );
    }
};

export default Rides;
