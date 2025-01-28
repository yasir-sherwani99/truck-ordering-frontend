import React from 'react';
import { Helmet } from 'react-helmet';

import AppLayout from '../../../theme/AppLayout';
import BookingForm from '../../../components/forms/BookingForm';
import Heading from '../../../components/common/Heading';

const BookingPage = () => {
    return (
        <AppLayout>
            <Helmet title="Truck Ordering | Booking" />
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-md-8 col-sm-12">
                            <div className="form_container">
                                <Heading
                                    text="Book a Truck" 
                                />
                                <div className="mt-4">
                                    <BookingForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>          
        </AppLayout>
    );
};

export default BookingPage;