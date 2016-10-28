import React from 'react';
import ReactDOM from 'react-dom';

import './CitiesComp.css';

import CitiesJumbotron from '../CitiesJumbotron/CitiesJumbotron.jsx';
import CityBottomBanner from '../CityBottomBanner/CityBottomBanner.jsx';

class CitiesComp extends React.Component{
    render(){
        return (
            <div>
                <CitiesJumbotron/>
                <CityBottomBanner />
            </div>
        );
    }
};

export default CitiesComp;
