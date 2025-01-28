import React from 'react';

import { Bars } from 'react-loader-spinner';

const LoaderBars = () => {
    return (
        <Bars
            height="36"
            width="36"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            wrapperClass=""
            visible={true}
        />
    );
};

export default LoaderBars;