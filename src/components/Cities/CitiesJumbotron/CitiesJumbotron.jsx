import React from 'react';
import Geosuggest from 'react-geosuggest-plus';
import {getCityZip} from '../../../services/citiesListService.js';
import {postZip} from '../../../services/citiesListService.js';
import {hashHistory} from 'react-router';


import './CitiesJumbotron.css';

class CitiesJumbotron extends React.Component{

    handleInput(){
    }

    onSuggestSelectCity (city) {
      var lat = city.location.lat;
      var lng = city.location.lng;
      var cityId = getCityZip(lat, lng).then(res => postZip(res))
      console.log(getCityZip(lat, lng))
      console.log(cityId);
      return cityId.then(res => hashHistory.push('/cities/' + res))
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
                            onActivateSuggest={this.changeRoute}
                            />
                  </div>

                </div>
            </div>
        );
    }
};

export default CitiesJumbotron;
