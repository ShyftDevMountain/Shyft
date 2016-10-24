import React from "react";
import ReactDOM from "react-dom";


document.addEventListener( "DOMContentLoaded", () => {
    const app = document.getElementById( "app" );

    if ( app ) {
        ReactDOM.render(
            <h1>Hello from index.js!</h1>
            , app )
    }
} );
