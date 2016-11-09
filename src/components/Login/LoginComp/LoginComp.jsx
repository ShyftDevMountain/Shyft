import React from 'react';
import {Link} from 'react-router'

import {getFb} from '../../../services/FaceBookService.js';

import './LoginComp.css';

class LoginComp extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      FB: []
    }
  }

  componentDidMount(){
      setTimeout(function(){
          var loginForm = document.getElementById('loginForm');

          loginForm.classList.add('login-form-container-active');
      }, 200)

  }

  handleWindowClose(){
      var self = this;
      var loginContainer = document.getElementById('loginContainer');
      var loginForm = document.getElementById('loginForm');

      loginContainer.classList.remove('login-container-active');
      loginForm.classList.remove('login-form-container-active');
      setTimeout(function(){
          self.props.handleLoginClose()
      }, 500)


  }

  handleLoginClose(){

      var self = this;
      var loginContainer = document.getElementById('loginContainer');
      var loginForm = document.getElementById('loginForm');

      loginContainer.classList.remove('login-container-active');
      loginForm.classList.remove('login-form-container-active');
      setTimeout(function(){
          self.props.handleLoginClose()
      }, 500)

  }


  render(){
      return (
          <div>
              <div onClick={this.handleWindowClose.bind(this)} id="loginContainer" className="login-container">

                  <div id="loginForm" className="login-form-container">

                      <span onClick={this.handleLoginClose.bind(this)}><i className="material-icons login-close">close</i></span>
                      <div className="login-heading">Log in to Shyft</div>
                      <div className="login-input-container">
                          <input type="text" placeholder="Phone number"/>
                      </div>
                      <button type="button" className="login-button btn btn-primary">Log In</button>
                      <p className="login-or">or</p>


                      <button  type="button"  className="login-facebook-btn btn-primary"><i className="fa fa-facebook-official login-fb-logo" aria-hidden="true"></i><a href="/auth/facebook">Login with Facebook</a></button>


                      <p className="login-newtolyft">New to Lyft?<span className="login-signup">Sign up</span></p>
                      <p className="login-newtolyft">Need to update your phone number?<span className="login-contact">Contact us</span></p>
                  </div>
              </div>
          </div>
      );
  }
};

export default LoginComp;
