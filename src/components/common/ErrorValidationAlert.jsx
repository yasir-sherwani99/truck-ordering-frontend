import React from 'react';

const ErrorValidationAlert = ({errors}) => {
    return (
        <>
            <div className="alert alert-danger" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h6 className="alert-heading font-weight-bold">Errors</h6>
                <ul>
                    {Object.keys(errors).map((key, index) => (
                        <li key={index}>{errors[key][0]}</li>
                    ))}
                </ul>
            </div>  
        </>
    );
};

export default ErrorValidationAlert;