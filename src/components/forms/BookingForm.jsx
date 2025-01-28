import React from 'react';
import { TextField, FormControl, InputLabel, NativeSelect, InputBase, styled, Button, Icon, CircularProgress, FormHelperText } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import MuiPhoneNumber from 'material-ui-phone-number-2';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { useAuth } from '../../context/AuthContext';
import guestService from '../../services/guestService';
import ErrorValidationAlert from '../common/ErrorValidationAlert';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
}));

const cargoTypes = [
    'Agriculture Products',
    'Automobiles & Spare Parts',
    'Consumer Goods',
    'Construction Material',
    'Metals & Minerals',
    'Other'
];

const truckTypes = [
    'Box Truck',
    'Flatbed Truck',
    'Refrigerated Truck',
    'Curtain Trailer'
];

const truckNumbers = [
    '1',
    '2',
    '3',
    '4',
    '5'
];

const formValidationSchema = Yup.object().shape({
    first_name: Yup.string().required('This is a required field'),
    last_name: Yup.string().required('This is a required field'),
    email: Yup.string().required('This is a required field'),
    phone: Yup.string().required('This is a required field'),
    pickup_address: Yup.string().required('This is a required field'),
    delivery_address: Yup.string().required('This is a required field'),
    cargo_type: Yup.string().required('This is a required field'),
    cargo_weight: Yup.string().required('This is a required field'),
    truck_type: Yup.string().required('This is a required field'),
    truck_qty: Yup.string().required('This is a required field'),
    pickup_date: Yup.date().required('This is a required field'),
    delivery_date: Yup.date().required('This is a required field'),
    message: Yup.string().nullable().max('500'),
});

const BookingForm = () => {

    const { errors, setAuthErrors, clearAuthErrors } = useAuth();

    const handleFormSubmit = (values, formikBag) => {

        clearAuthErrors();
        const {setSubmitting, resetForm} = formikBag;

        const formData = new FormData();
        formData.append('first_name', values.first_name)
        formData.append('last_name', values.last_name)
        formData.append('email', values.email)
        formData.append('phone', values.phone)
        formData.append('pickup_address', values.pickup_address)
        formData.append('delivery_address', values.delivery_address)
        formData.append('cargo_type', values.cargo_type)
        formData.append('cargo_weight', values.cargo_weight)
        formData.append('truck_type', values.truck_type)
        formData.append('truck_qty', values.truck_qty)
        formData.append('pickup_date', values.pickup_date)
        formData.append('delivery_date', values.delivery_date)
        formData.append('message', values.message)

        guestService.storeTruckBooking(formData)
                .then((res) => {
                    setSubmitting(false)
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
                    phone: '',
                    company: '',
                    pickup_address: '',
                    delivery_address: '',
                    cargo_type: '',
                    cargo_weight: '',
                    truck_type: '',
                    truck_qty: '',
                    pickup_date: '',
                    delivery_date: '',
                    message: ''
                }}
                validationSchema={formValidationSchema}
                onSubmit={handleFormSubmit}
            >
                {formik => (
                    <Form>
                        <div className="row my-3">
                            <div className="col-md-6">
                                <TextField
                                    id="first_name"
                                    label="First Name"
                                    placeholder="John"
                                    size="small"
                                    fullWidth
                                    {...formik.getFieldProps('first_name')}
                                //    error={formik.errors.first_name ? true : false}
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
                                //    error={formik.errors.last_name ? true : false}
                                />
                                <FormHelperText error={true}>{formik.errors.last_name}</FormHelperText>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-6">
                                <TextField
                                //    required
                                    id="email"
                                    label="Email"
                                    placeholder="you@gmail.com"
                                    size="small"
                                    fullWidth
                                    {...formik.getFieldProps('email')}
                                //    error={formik.errors.email ? true : false}
                                /> 
                                <FormHelperText error={true}>{formik.errors.email}</FormHelperText>
                            </div>
                            <div className="col-md-6">
                                <MuiPhoneNumber
                                    id="phone" 
                                    variant='outlined'
                                    defaultCountry={'sa'}
                                    placeholder='Phone'
                                //    required
                                    fullWidth
                                    size="small"  
                                    {...formik.getFieldProps('phone')}
                                //    error={formik.errors.phone ? true : false}
                                />  
                                <FormHelperText error={true}>{formik.errors.phone}</FormHelperText>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-12">
                                <TextField
                                    id="company"
                                    label="Company"
                                    placeholder="Al Hamra Plastic Factory"
                                    size="small"
                                    fullWidth
                                    {...formik.getFieldProps('company')}
                                />
                                <FormHelperText error={true}>{formik.errors.company}</FormHelperText>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-12">
                                {/* <InputLabel htmlFor="demo-customized-select-native">Pickup Address</InputLabel> */}
                                <TextField
                                //    required
                                    id="pickup_address"
                                    label="Pickup Address"
                                    placeholder="Pickup Address"
                                    size="small"
                                    fullWidth
                                    {...formik.getFieldProps('pickup_address')}
                                //    error={formik.errors.pickup_address ? true : false}
                                />
                                <FormHelperText error={true}>{formik.errors.pickup_address}</FormHelperText>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-12">
                                <TextField
                                //    required
                                    id="delivery_address"
                                    label="Delivery Address"
                                    placeholder="Delivery Address"
                                    size="small"
                                    fullWidth
                                    {...formik.getFieldProps('delivery_address')}
                                //    error={formik.errors.delivery_address ? true : false}
                                />
                                <FormHelperText error={true}>{formik.errors.delivery_address}</FormHelperText>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-6">
                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                    {/* <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel> */}
                                    <NativeSelect
                                        id="cargo_type"
                                        input={<BootstrapInput />}
                                        inputProps={{
                                            name: 'cargo_type',
                                            size: 'small'
                                        }}
                                        {...formik.getFieldProps('cargo_type')}
                                    //    error={formik.errors.cargo_type ? true : false}
                                    >
                                        <option aria-label="None" value="">Cargo Type</option>
                                        {cargoTypes.map((cargo, index) => (
                                            <option key={index} value={cargo}>{cargo}</option>
                                        ))}
                                    </NativeSelect>
                                </FormControl> 
                                <FormHelperText error={true}>{formik.errors.cargo_type}</FormHelperText>
                            </div>
                            <div className="col-md-6">
                                <TextField
                                    id="cargo_weight"
                                    label="Cargo Weight"
                                    placeholder="e.g. 15 tons"
                                    size="small"
                                    fullWidth
                                    {...formik.getFieldProps('cargo_weight')}
                                //    error={formik.errors.cargo_weight ? true : false}
                                />
                                <FormHelperText error={true}>{formik.errors.cargo_weight}</FormHelperText>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-6">
                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                    {/* <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel> */}
                                    <NativeSelect
                                        id="truck_type"
                                        input={<BootstrapInput />}
                                        inputProps={{
                                            name: 'truck_type',
                                            size: 'small'
                                        }}
                                        {...formik.getFieldProps('truck_type')}
                                    //    error={formik.errors.truck_type ? true : false}
                                    >
                                        <option aria-label="None" value="">Truck Type</option>
                                        {truckTypes.map((truck, index) => (
                                            <option key={index} value={truck}>{truck}</option>
                                        ))}
                                    </NativeSelect>
                                </FormControl> 
                                <FormHelperText error={true}>{formik.errors.truck_type}</FormHelperText>
                            </div>
                            <div className="col-md-6">
                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                    {/* <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel> */}
                                    <NativeSelect
                                        id="truck_qty"
                                        input={<BootstrapInput />}
                                        inputProps={{
                                            name: 'truck_qty',
                                            size: 'small'
                                        }}
                                        {...formik.getFieldProps('truck_qty')}
                                    //    error={formik.errors.truck_qty ? true : false}
                                    >
                                        <option aria-label="None" value="">No. of Trucks</option>
                                        {truckNumbers.map((num, index) => (
                                            <option key={index} value={num}>{num}</option>
                                        ))}
                                    </NativeSelect>
                                </FormControl>
                                <FormHelperText error={true}>{formik.errors.truck_qty}</FormHelperText>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-6">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker 
                                        sx={{ width: '100%' }}
                                        label="Pickup Date"
                                        format="DD-MM-YYYY"
                                        formatDensity='dense'
                                        name="pickup_date"
                                    //    required 
                                        slotProps={{ 
                                            textField: { size: 'small' } 
                                        }}
                                        onChange={(newValue) => formik.setFieldValue('pickup_date', newValue, true)}
                                    //    error={formik.errors.pickup_date ? true : false}
                                    />
                                </LocalizationProvider>
                                <FormHelperText error={true}>{formik.errors.pickup_date}</FormHelperText>
                            </div>
                            <div className="col-md-6">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker 
                                        sx={{ width: '100%' }}
                                        label="Delivery Date"
                                        format="DD-MM-YYYY"
                                        formatDensity='dense'
                                        name="delivery_date"
                                    //    required 
                                        slotProps={{ textField: { size: 'small' } }}
                                        onChange={(newValue) => formik.setFieldValue('delivery_date', newValue, true)}
                                    //    error={formik.errors.delivery_date ? true : false}
                                    />
                                </LocalizationProvider>
                                <FormHelperText error={true}>{formik.errors.delivery_date}</FormHelperText>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-12">
                                <TextField
                                    id="message"
                                    label="Message"
                                    placeholder="Your message here"
                                    multiline
                                    rows={4}
                                    size="small"
                                    fullWidth
                                    {...formik.getFieldProps('message')}
                                />
                                <FormHelperText error={true}>{formik.errors.message}</FormHelperText>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-12 text-center">
                                <Button 
                                    variant="contained"
                                    color="warning"
                                    type="submit"
                                    disabled={formik.isSubmitting}
                                >
                                    {formik.isSubmitting && (<CircularProgress size={24} />)}
                                    {!formik.isSubmitting && "Submit"}
                                </Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>  
        </>
    );
};

export default BookingForm;