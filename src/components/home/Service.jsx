import React from 'react';

import s1Img from '../../assets/images/s1.jpg';
import s2Img from '../../assets/images/s2.jpg';
import s3Img from '../../assets/images/s3.jpg';

const Service = () => {
    return (
        <section className="service_section layout_padding">
            <div className="service_container">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Our Services
                        </h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mx-auto">
                            <div className="box">
                                <div className="img-box">
                                    <img src={s1Img} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>Road Transport</h5>
                                    <p>
                                        fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        The point of using
                                    </p>
                                    <a href="">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mx-auto ">
                            <div className="box ">
                                <div className="img-box">
                                    <img src={s2Img} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>Air Cargo</h5>
                                    <p>
                                        fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        The
                                        point of using
                                    </p>
                                    <a href="">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mx-auto ">
                            <div className="box ">
                                <div className="img-box">
                                    <img src={s3Img} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>Sea Freight</h5>
                                    <p>
                                        fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        The point of using
                                    </p>
                                    <a href="">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;