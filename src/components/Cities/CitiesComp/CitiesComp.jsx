import React from 'react';
import ReactDOM from 'react-dom';

import './CitiesComp.css';

import CitiesJumbotron from '../CitiesJumbotron/CitiesJumbotron.jsx';

class CitiesComp extends React.Component{
    render(){
        return (
            <div>
                <CitiesJumbotron/>
            </div>
        );
    }
};

export default CitiesComp;
