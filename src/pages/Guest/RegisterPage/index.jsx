import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';

import AppLayout from '../../../theme/AppLayout';
import Heading from '../../../components/common/Heading';
import RegisterForm from '../../../components/forms/RegisterForm';
import { useAuth } from '../../../context/AuthContext';

const RegisterPage = () => {

    const { authData } = useAuth();

    if(authData.isAuthenticated) {
        return <Navigate to="/dashboard" />
    }

    return (
        <AppLayout>
            <Helmet title="Truck Ordering | Register" />
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-md-6 col-sm-12">
                            <div className="form_container">
                                <Heading
                                    text="Signup" 
                                />
                                <div id="logreg-forms" className="mt-4">
                                    <RegisterForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
};

export default RegisterPage;