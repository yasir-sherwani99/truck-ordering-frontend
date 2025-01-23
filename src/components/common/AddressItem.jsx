import React from 'react';

import { Link } from 'react-router-dom';

const AddressItem = (props) => {
    return (
        <Link to={props.link}>
            <i className={props.icon} aria-hidden="true"></i>
            <span className="ml-1">{props.text}</span>
        </Link>
    );
};

export default AddressItem;