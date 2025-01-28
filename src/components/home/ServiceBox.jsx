import React from 'react';
import { Link } from 'react-router-dom';

const ServiceBox = (props) => {
    return (
        <div className="box">
            <div className="img-box">
                <img src={props.img} alt="" />
            </div>
            <div className="detail-box">
                <h5>{props.title}</h5>
                <p>
                    {props.text}
                </p>
                <Link to={props.link}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default ServiceBox;