import React from "react";
import {render} from "react-dom";
import {Router, Route, hashHistory} from 'react-router';

import './styles.css';

import NavBar from './components/Home/NavBar/NavBar.jsx';
import Footer from './components/Home/Footer/Footer.jsx';
import HomeComp from './components/Home/HomeComp/HomeComp.jsx';
import CitiesComp from './components/Cities/CitiesComp/CitiesComp.jsx';
import RidesComp from './components/Rides/RidesComp/RidesComp.jsx';
import UserDashboardComp from './components/UserDashboard/UserDashboardComp/UserDashboardComp.jsx';
import RidesComp from './components/RideWithShyft/RidesComp/RidesComp.jsx';
import CityDetails from './components/Cities/CityDetails/CityDetails.jsx';
import LoginComp from './components/Login/LoginComp/LoginComp.jsx';

class App extends React.Component {
  render() {
    return (

      <Router history={hashHistory}>
        <Route component={NavBar}>
            <Route path="/" component={HomeComp}></Route>
            <Route path="/cities" component={CitiesComp}></Route>
            <Route path="/rides" component={RidesComp}></Route>
            <Route path="/userdashboard" component={UserDashboardComp}></Route>
            <Route path="/rideWithShyft" component={RidesComp}></Route>
            <Route path="/cities/:id" component={CityDetails}></Route>
            <Route path="/login" component={LoginComp}></Route>
        </Route>
      </Router>
    );
  }
};

render(<App />, document.getElementById('app'));
