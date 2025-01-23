import React from 'react';

const Slider = () => {
    return (
        <section className="slider_section ">
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                <div className="container">
                    <div className="carousel_btn_box">
                        <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
                            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-9 col-lg-7 ">
                                    <div className="detail-box">
                                        <h1>
                                            Transport and <br />
                                            Logistic Service
                                        </h1>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                                        </p>
                                        <div className="btn-box">
                                            <a href="" className="btn1">
                                                Get A Quote
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>
                {/* <div className="carousel-item">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-9 col-lg-7 ">
                                <div className="detail-box">
                                    <h1>
                                        Transport and <br />
                                        Logistic Service
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                                    </p>
                                    <div className="btn-box">
                                        <a href="" className="btn1">
                                            Get A Quote
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-9 col-lg-7 ">
                                <div className="detail-box">
                                    <h1>
                                        Transport and <br />
                                        Logistic Service
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                                    </p>
                                    <div className="btn-box">
                                        <a href="" className="btn1">
                                            Get A Quote
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-9 col-lg-7 ">
                                <div className="detail-box">
                                    <h1>
                                        Transport and <br />
                                        Logistic Service
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                                    </p>
                                    <div className="btn-box">
                                        <a href="" className="btn1">
                                            Get A Quote
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Slider;