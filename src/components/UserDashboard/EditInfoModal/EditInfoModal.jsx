import React from 'react';
import {updateCustomerInfo} from '../../../services/dashboardService.js';
import {getCustomerInfo} from '../../../services/dashboardService.js';


import './EditInfoModal.css';

class EditInfoModal extends React.Component{

  constructor(props) {
    super(props)

  }

  componentWillMount() {
    getCustomerInfo().then(res => {
      console.log(res)
      res = res[0]
      this.setState({
        name: res.displayname,
        email: res.email,
        phone: res.phone,
        fb: res.fb
      })
    })
  }

  handleUpdateClose(){
      var self = this;
      self.props.handleUpdateClose()
  }


    render(){
        return (
            <div>
                <div className="editinfo-modal">
                    <div className="editinfo-info-container">
                        <div className="editinfo-logo-container">
                            <img className="editinfo-logo" src="./img/LYFT_LOGO/SVG/lyft_pixel.svg"/>
                        </div>
                        <div className="editinfo-update-container">
                            <form>
                                <div className="editinfo-update-content">
                                    <input type="text" value={this.state.name}/>
                                </div>
                                <div className="editinfo-update-content">
                                    <input type="text" value={this.state.email}/>
                                </div>
                                <div className="editinfo-update-content">
                                    <input type="text" value={this.state.phone}/>
                                </div>
                                <div className="editinfo-update-btn-container">
                                    <input className="editinfo-update-btn" type="submit" value="Update" onClick={this.handleUpdateClose.bind(this)}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default EditInfoModal;
