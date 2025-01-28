import React from 'react';
import { Helmet } from 'react-helmet';

import AppLayout from '../../../theme/AppLayout';
import Service from '../../../components/home/Service';

const ServicePage = () => {
    return (
        <AppLayout>
            <Helmet title="Truck Ordering | Services" />
            <Service />
        </AppLayout>
    );
};

export default ServicePage;