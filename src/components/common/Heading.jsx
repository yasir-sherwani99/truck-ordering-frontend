import React from 'react';

const Heading = (props) => {
    return (
        <div className="heading_container">
            <h2>{props.text}</h2>
        </div>
    );
};

export default Heading;