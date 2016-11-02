import React from 'react';
import {render} from 'react-dom';

import EditInfoModal from '../EditInfoModal/EditInfoModal.jsx';
import './UserDashboardComp.css';
import {getCustomerInfo} from '../../../services/dashboardService.js';











class UserDashboardComp extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
      getCustomerInfo().then(res => {
          res = res[0]
          this.setState({
            name: res.name,
            email: res.email,
            phone: res.phone,
            fb: res.fb
          })
      })
  }




    render(){
        return (
            <div className="userdash-wrapper">

                <div className="userdash-sideanduser-container">
                    <section className="userdash-sidebar-container">
                        <img className="userdash-logo-main" src="./img/LYFT_LOGO/SVG/white_logo.svg"/>
                        <div className="userdash-sidebar-innerbox">
                            <div className="userdash-user-pic-container">
                                    <img src="./img/userdash/screaming-kid1.jpg"/>
                                <div className="userdash-sidebar-item-container">
                                    <div className="userdash-sidebar-item">
                                        <i className="fa fa-user userdash-icons" aria-hidden="true"></i><span>User</span>
                                    </div>
                                    <div className="userdash-sidebar-item">
                                        <i className="fa fa-question-circle userdash-icons" aria-hidden="true"></i><a href="#">Help</a>
                                    </div>
                                </div>
                            </div>

                            <h4 className="userdash-welcome">Welcome {this.state.fb}!</h4>
                        </div>
                    </section>


                    <section className="userdash-user-container">
                        <div className="userdash-user-innerbox">
                            <div className="userdash-user-title"><i className="fa fa-tachometer userdash-icons-title userdash-icons-title" aria-hidden="true"></i>
User Dashboard</div>
                            <div className="userdash-user-infobox">
                                <div className="userdash-icon-box">
                                    <i className="fa fa-user userdash-icons" aria-hidden="true"></i>
                                </div>
                                <div className="userdash-user-info">{this.state.name}</div>
                            </div>
                            <div className="userdash-user-infobox">
                                <div className="userdash-icon-box">
                                    <i className="fa fa-phone-square userdash-icons" aria-hidden="true"></i>
                                </div>
                                <div className="userdash-user-info">{this.state.phone}</div>
                            </div>
                            <div className="userdash-user-infobox">
                                <div className="userdash-icon-box">
                                    <i className="fa fa-envelope userdash-icons" aria-hidden="true"></i>
                                </div>
                                <div className="userdash-user-info">{this.state.email}</div>
                            </div>


                            <div className="userdash-user-ridesrequest-box">
                                <div className="userdash-user-rides">
                                    <div className="userdash-icon-box">
                                        <i className="fa fa-car userdash-icons" aria-hidden="true"></i>
                                    </div>
                                    <span className="userdash-ridenumber"> 5</span>
                                </div>
                                <div className="userdash-user-comments">
                                    <div className="userdash-icon-box">
                                        <i className="fa fa-file-text-o userdash-icons" aria-hidden="true"></i>
                                    </div>
                                    <textarea className="userdash-textarea" placeholder="Comments"></textarea>
                                </div>

                            </div>
                            <div>
                                <button className="userdash-updateinfo-btn btn btn-primary">Update Info</button>
                            </div>



                        </div>
                    </section>

                </div>

                <EditInfoModal />
            </div>
        );
    }
};

export default UserDashboardComp;
