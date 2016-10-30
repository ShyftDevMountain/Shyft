import React from 'react';
import Geosuggest from 'react-geosuggest-plus';
import {getZip} from '../../../services/citiesListService.js';

import './CitiesJumbotron.css';

class CitiesJumbotron extends React.Component{

    handleInput(){
    }

    onSuggestSelectCity (city) {
      var lat = city.location.lat;
      var lng = city.location.lng;
      console.log(getZip(lat, lng))
    }

    render(){
        return (
            <div>
                <div className="cities-jumbotron-container">
                    <div className="cities-jumbotron-title">Cities We're In</div>
                    <div className="cities-jumbotron-input-container">
                        <div className="cities-magnify"><i className="material-icons">search</i></div>
                        <Geosuggest placeholder="Find by city"
                          onSuggestSelect={this.onSuggestSelectCity}
                          />
                    </div>

                </div>
            </div>
        );
    }
};

export default CitiesJumbotron;
