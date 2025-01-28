import React from 'react';

import Heading from '../common/Heading';
import ServiceBox from './ServiceBox';

import s1Img from '../../assets/images/s1.jpg';
import s2Img from '../../assets/images/s2.jpg';
import s3Img from '../../assets/images/s3.jpg';

const Service = () => {
    return (
        <section className="service_section layout_padding">
            <div className="service_container">
                <div className="container">
                    <Heading
                        text="Our Services" 
                    />
                    <p className="mt-2">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                    </p>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mx-auto">
                            <ServiceBox 
                                img={s1Img}
                                title="Road Transport"
                                text="fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        The point of using"
                                link="#"
                            />
                        </div>
                        <div className="col-md-6 col-lg-4 mx-auto">
                            <ServiceBox 
                                img={s2Img}
                                title="Air Cargo"
                                text="fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        The point of using"
                                link="#"
                            />
                        </div>
                        <div className="col-md-6 col-lg-4 mx-auto">
                            <ServiceBox 
                                img={s3Img}
                                title="Sea Freight"
                                text="fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        The point of using"
                                link="#"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;