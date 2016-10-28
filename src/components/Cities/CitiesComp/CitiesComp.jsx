import React from 'react';
import ReactDOM from 'react-dom';

import './CitiesComp.css';

import CitiesJumbotron from '../CitiesJumbotron/CitiesJumbotron.jsx';
import CityBottomBanner from '../CityBottomBanner/CityBottomBanner.jsx';
import CitiesListComp from '../CitiesListComp/CitiesListComp.jsx';

class CitiesComp extends React.Component{
    render(){
        return (
            <div>
                <CitiesJumbotron/>
                <CitiesListComp />
                <CityBottomBanner />
            </div>
        );
    }
};

export default CitiesComp;
