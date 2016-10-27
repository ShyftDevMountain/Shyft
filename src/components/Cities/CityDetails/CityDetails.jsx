import React from 'react';
import {Link} from 'react-router';

import CitiesEstimateForm from  '../CitiesEstimateForm/CitiesEstimateForm.jsx'

import './CityDetails.css';


class CityDetails extends React.Component {
  render () {
    return (
        <div>
          <div>This is city details!</div>
          <CitiesEstimateForm />
        </div>
    );
  }
};



export default CityDetails;
