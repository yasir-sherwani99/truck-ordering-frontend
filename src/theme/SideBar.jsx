import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import NavItem2 from '../components/common/NavItem2';

const SideBar = ({data}) => {
    
    const { authData } = useAuth();

    return (
        <>
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    {authData.isAuthenticated && (
                        <>
                            <NavItem2
                                icon="fa fa-home"
                                text="Dashboard" 
                                link="/dashboard"
                            />
                            <NavItem2
                                icon="fa fa-shopping-cart"
                                text="Bookings" 
                                link="/bookings"
                            />
                        </>
                    )}
                    {authData.isAdminAuthenticated && (
                        <>
                            <NavItem2
                                icon="fa fa-home"
                                text="Dashboard" 
                                link="/admin/dashboard"
                            />
                            <NavItem2
                                icon="fa fa-bell"
                                text="Notifications" 
                                link="#"
                                count={data.notifications != 0 ? data.notifications : ""}
                            />
                            <NavItem2
                                icon="fa fa-shopping-cart"
                                text="Bookings" 
                                link="/admin/bookings"
                                count={data.bookings}
                            />
                        </>
                    )}
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Settings</span>
                    <Link to="#" className="d-flex align-items-center text-muted">
                        <span data-feather="plus-circle"></span>
                    </Link>
                </h6>
                <ul className="nav flex-column mb-2">
                    <NavItem2
                        icon="fa fa-user"
                        text="Profile" 
                        link="#"
                    />
                    <NavItem2
                        icon="fa fa-lock"
                        text="Password" 
                        link="#"
                    />
                </ul>
            </div>   
        </>
    );
};

export default SideBar;