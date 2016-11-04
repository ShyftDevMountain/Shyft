import React from 'react';


class ShyftPlus extends React.Component{



    render(){
        return (

            <div>
                <section id="ShyftPlus" className='cityDetails-TwoWays'>
                  <div className='cityDetails-TwoWaysWrap'>
                    <h2>Two Ways to Ride</h2>
                    <div className='cityDetails-carWrapper'>
                      <img className='citydetails-lyft' src='/img/cities/carLyftplus.png' />
                    </div>
                    <p>Lyft Plus is a supersized ride with six seats for when you need more space or just want to roll with the entire squad.</p>
                  </div>
                  <div className='cityDetails-pricesWrapper'>
                    <div className='cityDetails-prices'>
                      <section>
                        <div className='priceChart'>
                          <div className='priceChart-btnwrapper'>
                            <button onClick={this.props.showLyft} className='pricechart-btn active'>
                              Lyft
                            </button>
                            <button className='pricechart-btn'>
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
                                    $3.00
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
                                    $2.35
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Cost Per Minute
                                  </td>
                                  <td>
                                    $0.25
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Maximum Fare
                                  </td>
                                  <td>
                                    $7.50
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Scheduled Ride Cancel Penalty
                                  </td>
                                  <td>
                                    $10.00
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Service Fee
                                  </td>
                                  <td>
                                    $1.70
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

export default ShyftPlus;
