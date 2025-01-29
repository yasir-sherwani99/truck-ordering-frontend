import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { useAuth } from '../../../context/AuthContext';
import AdminDashboardLayout from '../../../theme/AdminDashboardLayout';
import adminService from '../../../services/adminService';

const HomePage = () => {

    const { authData } = useAuth();
    const [statsData, setStatsData] = useState("");
    const [adminData, setAdminData] = useState("");

    useEffect(() => {
        adminService.getDashboard()
                .then((res) => {
                    setAdminData(res.data.data)
                    setStatsData(res.data.data.stats)
                })
    }, []);

    if(!authData.isAdminAuthenticated) {
        return <Navigate to="/admin" />
    }

    return (
        <AdminDashboardLayout data={statsData && (statsData)}>
            {adminData && (
                <>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Admin Dashboard</h1>
                    </div>
                </>
            )}
            {!adminData && (
                <div className="row my-4">
                    <div className="col-md-12 text-center">
                        <CircularProgress
                            color="primary"
                            size="2.0rem"
                            thickness={3.6} 
                        />
                    </div>
                </div>
            )}
        </AdminDashboardLayout>
    );
};

export default HomePage;