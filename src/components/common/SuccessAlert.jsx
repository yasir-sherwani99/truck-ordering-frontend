import React from 'react';

import { useAuth } from '../../context/AuthContext';

const SuccessAlert = ({msg}) => {

    const { clearSuccessMsg } = useAuth();

    const handleClose = () => {
        clearSuccessMsg();
    }

    return (
        <>
            <div className="alert alert-success" role="alert">
                <button 
                    type="button" 
                    className="close" 
                    data-dismiss="alert" 
                    aria-label="Close"
                    onClick={handleClose}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <h6 className="alert-heading font-weight-bold">Well-done!</h6>
                <ul>
                    <li>{msg}</li>
                </ul>
            </div>  
        </>
    );
};

export default SuccessAlert;