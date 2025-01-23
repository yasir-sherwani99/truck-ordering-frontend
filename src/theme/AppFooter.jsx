import React from 'react';

import { Link } from 'react-router-dom';

const AppFooter = () => {
    return (
        <footer className="footer_section">
            <div className="container">
                <p>
                    &copy; <span id="displayYear"></span> All Rights Reserved By
                    <Link to="/">Truck Ordering App</Link>
                </p>
            </div>
        </footer>
    );
};

export default AppFooter;