import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../../../context/AuthContext';
import DashboardLayout from '../../../theme/DashboardLayout';

const HomePage = () => {

    const { authData } = useAuth();

    if(!authData.isAuthenticated) {
        return <Navigate to="/login" />
    }

    return (
        <DashboardLayout>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
            </div>
        </DashboardLayout>
    );
};

export default HomePage;