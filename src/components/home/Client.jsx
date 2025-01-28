import React from 'react';

import Heading from '../common/Heading';

import client1Img from '../../assets/images/client-1.jpg';
import client2Img from '../../assets/images/client-2.jpg';

const Client = () => {
    return (
        <section className="client_section layout_padding-bottom">
            <div className="container">                
                <Heading
                    text="What Says Our Client" 
                />
                <div className="client_container">
                    <div className="carousel-wrap ">
                        <div className="owl-carousel">
                            <div className="item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={client1Img} alt="" className="img-1" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Mark Evans
                                        </h5>
                                        <h6>
                                            Magna
                                        </h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={client2Img} alt="" className="img-1" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Anthony White
                                        </h5>
                                        <h6>
                                            Magna
                                        </h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={client1Img} alt="" className="img-1" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Mark Evans
                                        </h5>
                                        <h6>
                                            Magna
                                        </h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={client2Img} alt="" className="img-1" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Anthony White
                                        </h5>
                                        <h6>
                                            Magna
                                        </h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Client;