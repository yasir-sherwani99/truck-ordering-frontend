import React, { useState, useEffect } from 'react';

import bgImage from '../assets/images/slider-bg.jpg';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Slider from '../components/home/Slider';
import AppInfo from './AppInfo';

const AppLayout = ({children}) => {

    const [isHomePage, setHomePage] = useState(false);

    useEffect(() => {
        if(window.location.pathname === "/") {
            setHomePage(true)
        } else {
            setHomePage(false)
        }
    }, [window.location.pathname]);

    return (
        <>
            <div className="hero_area">
                <div className="hero_bg_box">
                    <img src={bgImage} alt="" />
                </div>
                <AppHeader />
                {isHomePage && (
                    <Slider />
                )}
            </div>
            {children}
            <AppInfo />
            <AppFooter />
        </>
    );
};

export default AppLayout;