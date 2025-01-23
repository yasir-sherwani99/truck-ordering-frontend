import React from 'react';

import { Link } from 'react-router-dom';

const ContactItem = (props) => {
    return (
        <Link to={props.link}>
            <i className={props.icon} aria-hidden="true"></i>
            <span>{props.text}</span>
        </Link>
    );
};

export default ContactItem;