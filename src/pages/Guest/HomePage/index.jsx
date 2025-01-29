import React from 'react';

import AppLayout from '../../../theme/AppLayout';
import About from '../../../components/home/About';
import Service from '../../../components/home/Service';
import Contact from '../../../components/home/Contact';
import Client from '../../../components/home/Client';

const HomePage = () => {
    return (
        <AppLayout>
            <About />
            <Service />
            <Contact />
            <Client />
        </AppLayout>
    );
};

export default HomePage;