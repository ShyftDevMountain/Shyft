import React from 'react';
import Geosuggest from 'react-geosuggest-plus';
import {getCityZip} from '../../../services/citiesListService.js';
import {postZip} from '../../../services/citiesListService.js';
import {hashHistory} from 'react-router';


import './CitiesJumbotron.css';

class CitiesJumbotron extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      citynotavailable: 'citynotavailable'
    }
    this.onSuggestSelectCity = this.onSuggestSelectCity.bind(this)
    this.removeCityNotAvaliable = this.removeCityNotAvaliable.bind(this)
  }

  removeCityNotAvaliable () {
    this.setState({
      citynotavailable: 'citynotavailable'
    })
  }

  onSuggestSelectCity (city) {
    var lat = city.location.lat;
    var lng = city.location.lng;
    var cityId = getCityZip(lat, lng).then(res => postZip(res))
    return cityId.then(res => {
      if (res === 'sorry') {
        this.setState({
          citynotavailable: 'citynotavailable active'
        })
      } else {
        return hashHistory.push('/citydetails/' + res)
      }
    });
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
                          onClick={this.removeCityNotAvaliable}
                          />
                        <div className={this.state.citynotavailable} onClick={this.removeCityNotAvaliable} >
                          <p>Sorry, Lyft is not available in your city.</p>
                          <p>Tell us why Lyft should come to your city!</p>
                          <button>Tweet</button>
                        </div>
                  </div>

              </div>
          </div>
      );
  }
};

export default CitiesJumbotron;
