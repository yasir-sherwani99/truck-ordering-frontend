import React from 'react';

import Heading from '../common/Heading';

import w1Img from '../../assets/images/w1.png';
import w2Img from '../../assets/images/w2.png';
import w3Img from '../../assets/images/w3.png';

const Contact = () => {
    return (
        <section className="contact_section_2 layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Heading
                            text="Why Choose Us" 
                        />
                        <div className="why_box">
                            <div className="box">
                                <div className="img-box">
                                    <img src={w1Img} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Satisfied Customers
                                    </h5>
                                    <p>
                                        Officia expedita sequi dolorum error consectetur, quos provident repudiandae at, rerum veniam doloremque velit eius
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img-box">
                                    <img src={w2Img} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Shipment Tracking
                                    </h5>
                                    <p>
                                        Officia expedita sequi dolorum error consectetur, quos provident repudiandae at, rerum veniam doloremque velit eius
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img-box">
                                    <img src={w3Img} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Customer Support
                                    </h5>
                                    <p>
                                        Officia expedita sequi dolorum error consectetur, quos provident repudiandae at, rerum veniam doloremque velit eius
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form_container">
                            <Heading
                                text="Contact Us" 
                            />
                            <form action="">
                                <input type="text" placeholder="Your Name" />
                                <input type="text" placeholder="Phone Number" />
                                <input type="email" placeholder="Email" />
                                <textarea className="message-box" placeholder="Message"></textarea>
                                <div className="btn_box">
                                    <button>
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;