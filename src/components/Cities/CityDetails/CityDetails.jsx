import React from 'react';
import {getOneCity} from '../../../services/cityDetailsService.js';


import CityBottomBanner from '../CityBottomBanner/CityBottomBanner.jsx'
import CitiesEstimateForm from  '../CitiesEstimateForm/CitiesEstimateForm.jsx'
import ShyftPlus from './ShyftPlus/ShyftPlus.jsx';
import RideShyft from './RideShyft/RideShyft.jsx';

import './CityDetails.css';


class CityDetails extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        showPlus: false,
        showLyft: true
    }
    this.showPlus = this.showPlus.bind(this)
    this.showLyft = this.showLyft.bind(this)

  }

  // handleShyftClick(){
  //     this.setState({
  //         showPlus: false,
  //         showLyft: true
  //     })
  // }
  //
  // handleShyftPlusClick() {
  //     this.setState({
  //         showPlus: true,
  //         showLyft: false
  //     })
  // }

  showPlus(){
      this.setState({
          showPlus: true,
          showLyft: false
      })
  }

  showLyft(){
      this.setState({
          showPlus: false,
          showLyft: true
      })
  }

  componentDidMount() {
      getOneCity(this.props.params.id).then(res => {
        console.log(res);
          res = res[0]
          this.setState({
            city: res.city,
            state: res.state,
            img: res.img,
            map_img: res.map_img
          })
      })
  }

  render () {

    let backgroundImg, cityMap
    if (this.state.img) {
      backgroundImg = {
        backgroundImage: `url("${this.state.img}")`
      }

      cityMap = {
        backgroundImage: `url("${this.state.map_img}")`
      }
    } else {
      backgroundImg = {
        backgroundColor: "#fff"
      }
      cityMap = {
        backgroundColor: "#fff"
      }
    }


    return (

        <div className='cityDetails'>
          <div className='cityDetails-jumbotron-container' style={backgroundImg}>
            <div className='col-xs-12 align-center jumbo-wrap'>
              <h1 className='cityDetails-jumbotron-title'>{this.state.city} Area</h1>
              <div className="btn btn-primary MainJumbotron-btn">
                Sign Up Now
              </div>
            </div>
          </div>
          <section className='cityDetails-howShyftWorks'>
            <div className='howitworksDescrip'>
              <h2>How Lyft Works</h2>
              <p>Wherever you're headed in the {this.state.city} Area, count on Lyft for rides in minutes. The Lyft app matches you with friendly local drivers at the tap of a button. Just request and go. After the ride, simply pay through your phone.</p>
            </div>
            <div className='howitworkstable'>
              <div className='col-lg-10 col-sm-12 col-xs-8'>
                <div className='icons-wrap'>
                  <div className='col-sm-4'>
                    <img className='clock-icon' src='/img/cities/clock-icon.svg'/>
                    <p>Lyft is available 24 hours a day, 7 days a week.</p>
                  </div>
                  <div className='col-sm-4'>
                    <img className='dollar-icon' src='/img/cities/dollar-icon.svg'/>
                    <p>Choose Lyft and get the most affordable ride in town.</p>
                  </div>
                  <div className='col-sm-4'>
                    <img className='people-icon' src='/img/cities/people-icon.svg' />
                    <p>From florists to firefighters, meet awesome drivers.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className='cityDetailsMap' style={cityMap}></div>
          <section className='cityDetailsEstimate'>
            <div className="cityDetailsEstimate-Wrap">
              <div className='estimate-description'>
                <h2>Estimate Trip Cost</h2>
                <p>Where to? Enter a pickup and drop-off location to estimate the price of your trip. Pro-tip: Your ride doesn’t just have to be from A to B. With Lyft and Lyft Plus, you can make multiple stops per ride.</p>
              </div>
              <div className='estimateform-wrap'>
                <CitiesEstimateForm />
              </div>
            </div>
          </section>

          {this.state.showPlus ? <ShyftPlus showLyft={this.showLyft}/> : null}
          {this.state.showLyft ? <RideShyft showPlus={this.showPlus}/> : null}

          <CityBottomBanner />
        </div>
    );
  }
};



export default CityDetails;
