import React from 'react';

import './SideMenuBackDrop.css';

class SideMenuBackDrop extends React.Component {
  handleClick() {
    this.props.hideMenu()
  }

  render(){
    return (
      <div className={this.props.showMenu} onClick={this.handleClick.bind(this)}>
      </div>
    )
  }
}

export default SideMenuBackDrop;
