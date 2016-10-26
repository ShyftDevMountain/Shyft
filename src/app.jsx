import React from "react";
import {render} from "react-dom";

import './styles.css';

import NavBar from './components/Home/NavBar/NavBar.jsx';
import HomeComp from './components/Home/HomeComp/HomeComp.jsx';
import Footer from './components/Home/Footer/Footer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <HomeComp />
        <Footer />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
