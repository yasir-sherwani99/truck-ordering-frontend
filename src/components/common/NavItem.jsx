import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

const NavItem = (props) => {

    const isActive = window.location.pathname === props.link;
    const activeClasses = classNames({
        'active': isActive
    });

    return (
        <li className={`nav-item ${activeClasses}`}>
            <Link to={props.link} className="nav-link">
                {props.icon && (
                    <i className={props.icon} aria-hidden="true"></i>
                )} 
                {props.text} {isActive && (<span className="sr-only">(current)</span>)}
            </Link>
        </li>
    );
};

export default NavItem;