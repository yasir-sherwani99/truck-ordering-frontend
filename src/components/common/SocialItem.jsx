import React from 'react';

import { Link } from 'react-router-dom';

const SocialItem = (props) => {
    return (
        <Link to={props.link}>
            <i className={props.icon} aria-hidden="true"></i>
        </Link>
    );
};

export default SocialItem;