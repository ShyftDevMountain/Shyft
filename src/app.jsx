import React from "react";
import {render} from "react-dom";
import {Router, Route, hashHistory} from 'react-router';

import './styles.css';

import NavBar from './components/Home/NavBar/NavBar.jsx';
import HomeComp from './components/Home/HomeComp/HomeComp.jsx';
import Footer from './components/Home/Footer/Footer.jsx';

class App extends React.Component {
  render() {
    return (

      <Router history={hashHistory}>
        <Route component={NavBar}>
            <Route path="/" component={HomeComp}/>
        </Route>
      </Router>
    )
  }
}

render(<App />, document.getElementById('app'));
