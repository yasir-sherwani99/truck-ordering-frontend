import React from 'react';
import { Navigate } from 'react-router-dom';

import AppLayout from '../../../theme/AppLayout';
import Heading from '../../../components/common/Heading';
import { useAuth } from '../../../context/AuthContext';
import AdminLoginForm from '../../../components/forms/AdminLoginForm';

const LoginPage = () => {

    const { authData } = useAuth();
    
    if(authData.isAdminAuthenticated) {
        return <Navigate to="/admin/dashboard" />
    }

    return (
        <AppLayout>
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-md-4 col-sm-12">
                            <div className="form_container">
                                <Heading
                                    text="Admin Login" 
                                />
                                <div className="mt-4">
                                    <AdminLoginForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
};

export default LoginPage;