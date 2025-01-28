import React from 'react';

import { Blocks } from 'react-loader-spinner';

const LoaderClock = () => {
    return (
        <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            wrapperClass="blocks-wrapper"
            visible={true}
        />
    );
};

export default LoaderClock;