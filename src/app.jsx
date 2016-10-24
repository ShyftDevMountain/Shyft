import React from "react";
import ReactDOM from "react-dom";

import './styles.css';

import Footer from './components/Home/Footer/Footer.jsx';

document.addEventListener( "DOMContentLoaded", () => {
    const app = document.getElementById( "app" );

    if ( app ) {
        ReactDOM.render(
          <div>
            <h1>Hello from index.js!</h1>
            <Footer />
          </div>
            , app )
    }
} );
