import React from 'react';
import {Link} from 'react-router';
import LoginComp from '../../Login/LoginComp/LoginComp.jsx'

import '../MainJumbotron/MainJumbotron.css';
var test = 1;
class BackgroundComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jumboBg: 'MainJumbotron-container bg1',
      showLogin: false
    }
    this.signUpClick = this.signUpClick.bind(this)
    this.handleLoginClose = this.handleLoginClose.bind(this)
  }
  componentDidMount () {
    var self = this;
    this.timer = setInterval(function(){
      if(test === 7){
        test = 0;
      }
      test++
      self.setState({
        jumboBg: 'MainJumbotron-container bg' + test

      })
    }, 5000)

  }

  signUpClick() {
      this.setState({
          showLogin: true
      })
  }

  handleLoginClose() {
      this.setState({
          showLogin: false
      })
  }



componentWillUnmount() {
  clearInterval(this.timer)
}
  render () {

    return (
      <div className={this.state.jumboBg}>
        <div className="MainJumbotron-title">Rides in Minutes</div>
        <div onClick={this.signUpClick}className="btn btn-primary MainJumbotron-btn">
            Sign Up Now
        </div>
        {this.state.showLogin ? <LoginComp handleLoginClose={this.handleLoginClose}/> : null}
    </div>
    )
  }

}

export default BackgroundComponent;
