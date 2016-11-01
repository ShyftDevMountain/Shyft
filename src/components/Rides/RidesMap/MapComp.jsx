import React, {PropTypes, Component} from 'react';
import './MapComp.css';

import GoogleMap from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';



export default class SimpleMapPage extends Component {
  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

 shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <GoogleMap className='map'
         bootstrapURLKeys={{
          key: 'AIzaSyDrzX2pFc5mTwnwwA2cqXKo2nLVV2Zkq5I',
          language: 'en'
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>

      </GoogleMap>
    );
  }
}
