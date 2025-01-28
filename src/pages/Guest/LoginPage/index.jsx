import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';

import AppLayout from '../../../theme/AppLayout';
import Heading from '../../../components/common/Heading';
import LoginForm from '../../../components/forms/LoginForm';
import { useAuth } from '../../../context/AuthContext';

const LoginPage = () => {

    const { authData } = useAuth();

    if(authData.isAuthenticated) {
        return <Navigate to="/dashboard" />
    }

    return (
        <AppLayout>
            <Helmet title="Truck Ordering | Login" />
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-md-4 col-sm-12">
                            <div className="form_container">
                                <Heading
                                    text="Login" 
                                />
                                <div className="mt-4">
                                    <LoginForm />
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