import React from 'react';
import './LoginComp.css';

class LoginComp extends React.Component{

    componentDidMount(){
        setTimeout(function(){
            var loginForm = document.getElementById('loginForm');

            loginForm.classList.add('login-form-container-active');
        }, 200)

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
                <div id="loginContainer" className="login-container">
                    <div id="loginForm" className="login-form-container">
                        <span onClick={this.handleLoginClose.bind(this)} className="login-close glyphicon glyphicon-remove"></span>
                        <div className="login-heading">Log in to Shyft</div>
                        <div className="login-input-container">
                            <input type="text" placeholder="Phone number"/>
                        </div>
                        <button type="button" className="login-button btn btn-primary">Log In</button>
                        <p className="login-or">or</p>
                        <button type="button" className="login-facebook-btn btn-primary"><i className="fa fa-facebook-official login-fb-logo" aria-hidden="true"></i>Log in with Facebook</button>
                        <p className="login-newtolyft">New to Lyft?<span className="login-signup">Sign up</span></p>
                        <p className="login-newtolyft">Need to update your phone number?<span className="login-contact">Contact us</span></p>
                    </div>
                </div>
            </div>
        );
    }
};

export default LoginComp;
