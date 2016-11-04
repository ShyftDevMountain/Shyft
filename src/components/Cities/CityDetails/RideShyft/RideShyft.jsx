import React from 'react';



class RideShyft extends React.Component{





    render(){
        return(
            <div>
            <section className='cityDetails-TwoWays'>
              <div className='cityDetails-TwoWaysWrap'>
                <h2>Two Ways to Ride</h2>
                <div className='cityDetails-carWrapper'>
                  <img className='citydetails-lyft' src='/img/cities/lyftcar.png' />
                </div>
                <p>Lyft is your personal ride. Whether you're traveling solo or with up to three friends, this sedan is yours to fill.</p>
              </div>
              <div className='cityDetails-pricesWrapper'>
                <div className='cityDetails-prices'>
                  <section>
                    <div className='priceChart'>
                      <div className='priceChart-btnwrapper'>
                        <button className='pricechart-btn active'>
                          Lyft
                        </button>
                        <button className='pricechart-btn' onClick={this.props.showPlus}>
                          Plus
                        </button>
                      </div>
                      <div className='priceChart-pricing'>
                        <table className='pricingTable'>
                          <tbody>
                            <tr>
                              <td>
                                Base Fare
                              </td>
                              <td>
                                $1.60
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Cancel Penalty
                              </td>
                              <td>
                                $5.00
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Cost Per Mile
                              </td>
                              <td>
                                $1.30
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Cost Per Minute
                              </td>
                              <td>
                                $0.14
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Maximum Fare
                              </td>
                              <td>
                                $4.00
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Scheduled Ride Cancel Penalty
                              </td>
                              <td>
                                $5.00
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Service Fee
                              </td>
                              <td>
                                $1.00
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </section>
        </div>
        );
    }
};

export default RideShyft;
