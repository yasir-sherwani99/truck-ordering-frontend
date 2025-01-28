import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, FormHelperText, CircularProgress } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import authService from '../../services/authService';
import ErrorValidationAlert from '../common/ErrorValidationAlert';
import { useAuth } from '../../context/AuthContext';

const formValidationSchema = Yup.object().shape({
    first_name: Yup.string().required('This is a required field'),
    last_name: Yup.string().required('This is a required field'),
    email: Yup.string().email().required('This is a required field'),
    password: Yup.string().required('This is a required field').min(6, 'Must be 6 characters or greater'),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match')
});

const RegisterForm = () => {

    const navigate = useNavigate();
    const { register, errors, setAuthErrors, clearAuthErrors } = useAuth();

    const handleFormSubmit = (values, formikBag) => {

        clearAuthErrors();
        const {setSubmitting, resetForm} = formikBag;

        const formData = new FormData();
        formData.append('first_name', values.first_name)
        formData.append('last_name', values.last_name)
        formData.append('email', values.email)
        formData.append('password', values.password)
        formData.append('password_confirmation', values.passwordConfirmation)

        authService.register(formData)
                .then((res) => {
                    setSubmitting(false)
                    resetForm(true)
                    register(res.data)
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
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    passwordConfirmation: ''
                }}
                validationSchema={formValidationSchema}
                onSubmit={handleFormSubmit}
            >
                {formik => (
                    <Form>
                        <div className="row my-2">
                            <div className="col-md-6">
                                <TextField
                                    id="first_name"
                                    label="First Name"
                                    placeholder="John"
                                    size="small"
                                    fullWidth
                                    {...formik.getFieldProps('first_name')}
                                    error={formik.errors.first_name ? true : false}
                                />
                                <FormHelperText error={true}>{formik.errors.first_name}</FormHelperText>
                            </div>
                            <div className="col-md-6">
                                <TextField
                                //    required
                                    id="last_name"
                                    label="Last Name"
                                    placeholder="Corney"
                                    size="small"
                                    fullWidth
                                    {...formik.getFieldProps('last_name')}
                                    error={formik.errors.last_name ? true : false}
                                />
                                <FormHelperText error={true}>{formik.errors.last_name}</FormHelperText>
                            </div>
                        </div>
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
                        <div className="row my-2">
                            <div className="col-md-12">
                                <TextField
                                    id="confirm_password"
                                    label="Confirm Password"
                                //    placeholder="you@gmail.com"
                                    size="small"
                                    type="password"
                                    fullWidth
                                    {...formik.getFieldProps('passwordConfirmation')}
                                    error={formik.errors.passwordConfirmation ? true : false}
                                />
                                <FormHelperText error={true}>{formik.errors.passwordConfirmation}</FormHelperText>
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
                                    {!formik.isSubmitting && "Sign Up"} 
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
                    <Link to="/login">
                        <Button 
                            variant="contained"
                            color="success"
                            type="submit"
                            fullWidth
                        //   disabled={formik.isSubmitting}
                        >
                            {/* {formik.isSubmitting && (<CircularProgress size={24} />)}
                            {!formik.isSubmitting && "Submit"} */}
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default RegisterForm;