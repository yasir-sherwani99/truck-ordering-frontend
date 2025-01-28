import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import authService from '../services/authService';

const TopBar = () => {

    const { logout } = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        authService.logout()
            .then((res) => {
                logout();
                if(res.data.success) {
                    navigate(`/login?q=${res.data.message}`)
                }
            })
            // .catch((error) => {
            //     setSubmitting(false)
            //     if(error.response && error.response.data.errors) {
            //         setAuthErrors(error.response.data.errors)
            //     } else {
            //         console.error("An unexpected error occurred:", error);
            //     }
            // })
    }

    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <Link 
                to="/"
                className="navbar-brand col-sm-3 col-md-2 mr-0" 
                style={{ paddingTop: '0.75rem', paddingBottom: '0.75rem', fontSize: '1rem', backgroundColor: 'rgba(0, 0, 0, .25)', boxShadow: 'inset -1px 0 0 rgba(0, 0, 0, .25)' }}
            >
                Truck Ordering App
            </Link>
            <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <Link 
                        to="#" 
                        className="nav-link"
                        onClick={handleLogout}
                    >
                        Sign out
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default TopBar;