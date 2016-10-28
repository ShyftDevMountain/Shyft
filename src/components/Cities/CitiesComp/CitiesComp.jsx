import React from 'react';
import './CitiesComp.css';

import CityBottomBanner from '../CityBottomBanner/CityBottomBanner.jsx';
import CitiesListComp from '../CitiesListComp/CitiesListComp.jsx';

class CitiesComp extends React.Component{
    render(){
        return (
            <div>
                <CitiesListComp />
                <CityBottomBanner />
            </div>
        );
    }
};

export default CitiesComp;
