import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

const NavItem2 = (props) => {

    const isActive = window.location.pathname === props.link;
    const activeClasses = classNames({
        'active': isActive
    });

    return (
        <li className="nav-item">
            <Link to={props.link} className={`nav-link ${activeClasses}`}>
                {props.icon && (
                    <i className={`mr-2 ${props.icon}`}></i>
                )} 
                {props.text} {isActive && (<span className="sr-only">(current)</span>)}
            </Link>
        </li>
    );
};

export default NavItem2;