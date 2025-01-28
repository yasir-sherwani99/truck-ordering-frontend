import React from 'react';
import NavItem2 from '../components/common/NavItem2';

const SideBar = () => {
    return (
        <>
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <NavItem2
                        icon="fa fa-home"
                        text="Dashboard" 
                        link="/dashboard"
                    />
                    <NavItem2
                        icon="fa fa-list"
                        text="Orders" 
                        link="#"
                    />
                    <NavItem2
                        icon="fa fa-cart"
                        text="Products" 
                        link="#"
                    />
                    <NavItem2
                        icon="fa fa-users"
                        text="Customers" 
                        link="#"
                    />
                    <NavItem2
                        icon="fa fa-bar-chart"
                        text="Reports" 
                        link="#"
                    />
                    <NavItem2
                        icon="fa fa-layers"
                        text="Inegrations" 
                        link="#"
                    />
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Saved reports</span>
                    <a className="d-flex align-items-center text-muted" href="#">
                        <span data-feather="plus-circle"></span>
                    </a>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Current month
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Last quarter
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Social engagement
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Year-end sale
                        </a>
                    </li>
                </ul>
            </div>   
        </>
    );
};

export default SideBar;