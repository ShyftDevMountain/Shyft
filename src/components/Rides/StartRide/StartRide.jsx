import React from 'react';

import './StartRide.css';

class StartRide extends React.Component {
  render() {
    return(
      <div>
        <div className='Main_Wrapper1'>
            <div className='Top_button_container'></div>
            <div className='Middle_button_container'></div>
            <div className='Bottom_button_container'>
              Cancel
            </div>

        </div>

      </div>
    )
  }
}

export default StartRide;
