import React from 'react';
import ReactDOM from 'react-dom';

import MainJumbotron from '../MainJumbotron/MainJumbotron.jsx';
import RidesInMinutes from '../RidesInMinutes/RidesInMinutes.jsx';
import FourWaysToRide from '../FourWaysToRide/FourWaysToRide.jsx';


class HomeComp extends React.Component {
  render() {
    return (
      <div>
      <MainJumbotron />
      <RidesInMinutes />
      <FourWaysToRide/>
      </div>
    )
  }
}

export default HomeComp;
