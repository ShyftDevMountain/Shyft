import React from 'react';
import Geosuggest from 'react-geosuggest-plus';

import './CitiesJumbotron.css';

class CitiesJumbotron extends React.Component{
    handleInput(){
    }
    render(){
        return (
            <div>
                <div className="cities-jumbotron-container">
                    <div className="cities-jumbotron-title">Cities We're In</div>
                    <div className="cities-jumbotron-input-container">
                        <div className="cities-magnify"><i className="material-icons">search</i></div>
                        <Geosuggest placeholder="Find by city"/>
                    </div>
                    
                </div>
            </div>
        );
    }
};

export default CitiesJumbotron;
