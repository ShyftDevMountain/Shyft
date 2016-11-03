import React from 'react';
import {Link} from 'react-router';

import '../MainJumbotron/MainJumbotron.css';
var test = 1;
class BackgroundComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jumboBg: 'MainJumbotron-container bg1'
    }
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

componentWillUnmount() {
  clearInterval(this.timer)
}
  render () {

    return (
      <div className={this.state.jumboBg}>
        <div className="MainJumbotron-title">Rides in Minutes</div>
        <div className="btn btn-primary MainJumbotron-btn">
            <Link to="/userdashboard">Sign Up Now</Link>
        </div>
    </div>
    )
  }

}

export default BackgroundComponent;
