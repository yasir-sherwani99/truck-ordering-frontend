import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, FormHelperText, CircularProgress } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import authService from '../../services/authService';
import ErrorValidationAlert from '../common/ErrorValidationAlert';
import { useAuth } from '../../context/AuthContext';

const formValidationSchema = Yup.object().shape({
    email: Yup.string().required('This is a required field'),
    password: Yup.string().required('This is a required field')
});

const LoginForm = () => {

    const navigate = useNavigate();
    const { login, errors, setAuthErrors, clearAuthErrors } = useAuth();

    const handleFormSubmit = (values, formikBag) => {

        clearAuthErrors();
        const {setSubmitting, resetForm} = formikBag;

        const formData = new FormData();
        formData.append('email', values.email)
        formData.append('password', values.password)

        authService.login(formData)
                .then((res) => {
                    setSubmitting(false)
                    resetForm(true)
                    login(res.data)
                    if(res.data.accessToken) {
                        navigate('/dashboard')
                    }
                })
                .catch((error) => {
                    setSubmitting(false)
                    if(error.response && error.response.data.errors) {
                        setAuthErrors(error.response.data.errors)
                    } else {
                        console.error("An unexpected error occurred:", error);
                    }
                })
    }

    return (
        <>
            {errors && (
                <ErrorValidationAlert errors={errors} />
            )}

            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={formValidationSchema}
                onSubmit={handleFormSubmit}
            >
                {formik => (
                    <Form>
                        <div className="row my-2">
                            <div className="col-md-12">
                                <TextField
                                    id="email"
                                    label="Email"
                                    placeholder="you@gmail.com"
                                    size="small"
                                    fullWidth
                                    {...formik.getFieldProps('email')}
                                    error={formik.errors.email ? true : false}
                                />
                                <FormHelperText error={true}>{formik.errors.email}</FormHelperText>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-12">
                                <TextField
                                    id="password"
                                    label="Password"
                                //    placeholder="you@gmail.com"
                                    size="small"
                                    type="password"
                                    fullWidth
                                    {...formik.getFieldProps('password')}
                                    error={formik.errors.password ? true : false}
                                />
                                <FormHelperText error={true}>{formik.errors.password}</FormHelperText>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-12">
                                <Button 
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    fullWidth
                                    disabled={formik.isSubmitting}
                                >
                                    {formik.isSubmitting && (<CircularProgress size={24} />)}
                                    {!formik.isSubmitting && "Sign In"} 
                                </Button>
                            </div>
                            <div className="col-md-12 mt-1">
                                <Link to="#" id="forgot_pswd">Forgot password?</Link>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            <hr />
            <div className="row my-3">
                <div className="col-md-12">
                    <Link to="/register">
                        <Button 
                            variant="contained"
                            color="success"
                            type="submit"
                            fullWidth
                        //   disabled={formik.isSubmitting}
                        >
                            {/* {formik.isSubmitting && (<CircularProgress size={24} />)}
                            {!formik.isSubmitting && "Submit"} */}
                            Sign Up New Account
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LoginForm;