import React from 'react';
import './FourWaysToRide.css';

class FourWaysToRide extends React.Component {
  render () {
    return (
      <div className='container-fluid contentforfourways' >
            <div className='container' >
                  <div className="row m-b-xl">
                        <div className="col-xs-12">
                            <div className="embedded_video full_width pos_r">
                                <div className="pos_r">
                                  <img className="full_width" src="https://cdn.lyft.net/brochure/images/home-poster.21ccd2b5.jpg" alt="Smiley face" />
                                    <div className='play radius-circle pos-ar bg-pink '></div>
                                    <div className='arrow pos-ar '></div>
                                </div>
                            </div>
                        </div>
                  </div>

                  <div className="row m-b-xl">
                      <div className="col-xs-12">
                          <section className='content_for_fourWaysToRide' >
                            <h2 className='text-xs-center pos-a ' > Four Ways to Ride</h2>




                              <div className="flex align-group-center flex-row-md text-md-left flex-column text-xs-center m-y-l">
                                      <div className='img'>
                                      </div>
                                      <div className='flexer'>
                                          <h3 className="text-thin m-b-s p-l-m-sm" data-reactid="150">Shyft Line</h3>
                                          <p className='m-b-0 '>
                                            Shyft Line is a shared ride. It matches you with others going the same way, so you can split the cost.
                                            Price is fixed upfront and always less than original Shyft. Available in select U.S. cities.
                                          </p>
                                          <p className='m-b-0 '>
                                             <a>Learn More</a>
                                          </p>
                                      </div>
                              </div>

                              <div className="flex align-group-center flex-row-md text-md-left flex-column text-xs-center m-y-l">
                                      <div className='img2'>
                                      </div>
                                      <div className='flexer'>
                                          <h3 className="text-thin m-b-s p-l-m-sm" data-reactid="150">Shyft</h3>
                                          <p className='m-b-0 '>
                                            Shyft is your personal ride. Whether you’re traveling solo or with up to three friends, this sedan is yours to fill. Available nationwide.
                                          </p>

                                      </div>
                              </div>

                              <div className="flex align-group-center flex-row-md text-md-left flex-column text-xs-center m-y-l">
                                      <div className='img3'>
                                      </div>
                                      <div className='flexer'>
                                          <h3 className="text-thin m-b-s p-l-m-sm" data-reactid="150">Shyft Plus</h3>
                                          <p className='m-b-0 '>
                                            Shyft Plus is a supersized ride with six seats for when you need more space or just want to roll with the entire squad. Available nationwide.
                                          </p>

                                      </div>
                              </div>

                              <div className="flex align-group-center flex-row-md text-md-left flex-column text-xs-center m-y-l">
                                      <div className='img4'>
                                      </div>
                                      <div className='flexer'>
                                          <h3 className="text-thin m-b-s p-l-m-sm" data-reactid="150">Shyft Line</h3>
                                          <p className='m-b-0 '>
                                            Shyft Premier is your high-end ride. From business trips to a night on the town, it’s the perfect way to add a little luxury and arrive in style. Available in select U.S. cities.
                                          </p>
                                      </div>
                              </div>
                          </section>
                      </div>
                  </div>
            </div>
      </div>

    )
  }
}


export default FourWaysToRide;
