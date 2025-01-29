import React from 'react';
import { Link } from 'react-router-dom';

import NavItem from '../components/common/NavItem';
import ContactItem from '../components/common/ContactItem';
import { useAuth } from '../context/AuthContext';

const AppHeader = () => {

    const { authData } = useAuth();

    return (
        <header className="header_section">
            <div className="header_top">
                <div className="container-fluid ">
                    <div className="header_top_content">
                        <Link 
                            to="/" 
                            className="navbar-brand d-none d-lg-flex"
                        >
                            <span>Truck Ordering App</span>
                        </Link>
                        <div className="contact_nav">
                            <ContactItem 
                                link="#"
                                icon="fa fa-phone"
                                text="+01 123455678990" 
                            />
                            <ContactItem 
                                link="#"
                                icon="fa fa-envelope"
                                text="demo@gmail.com" 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_bottom">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <Link 
                            to="/" 
                            className="navbar-brand d-flex d-lg-none"
                        >
                            <span>Truck Ordering App</span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  ">
                                <NavItem link="/" text="Home" />
                                <NavItem link="/services" text="Services" />
                                <NavItem link="#" text="About" />
                                <NavItem link="/book-truck" text="Book a Truck" />
                                {!authData.isAuthenticated && (
                                    <NavItem link="/login" text="Login" icon="fa fa-user mr-1" />
                                )}
                                {authData.isAuthenticated && (
                                    <NavItem link="/dashboard" text="Dashboard" icon="fa fa-dashboard mr-1" />
                                )}
                                {authData.isAdminAuthenticated && (
                                    <NavItem link="/admin/dashboard" text="Admin Dashboard" icon="fa fa-dashboard mr-1" />
                                )}
                                <form className="form-inline">
                                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;