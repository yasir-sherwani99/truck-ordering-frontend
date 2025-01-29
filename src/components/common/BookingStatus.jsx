import React, { useState } from 'react';

import adminService from '../../services/adminService';
import { useSnackbar } from 'notistack';

const BookingStatus = ({ id, status }) => {

    const { enqueueSnackbar } = useSnackbar();
    const [selectedStatus, setSelectedStatus] = useState(status);

    const handleChange = (event) => {
        setSelectedStatus(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
         // Ask for confirmation before submitting the form
        const isConfirmed = window.confirm('Are you sure you want to submit the form?');

        if(isConfirmed) {
            const formData = new FormData();
            formData.append('_method', 'put')
            formData.append('status', selectedStatus)

            adminService.updateBookingStatus(formData, id)
                        .then((res) => {
                            setSelectedStatus(res.data.status)
                            enqueueSnackbar(res.data.message, {
                                variant: 'success',
                                autoHideDuration: 5000
                            });
                        })
                        .catch((error) => {
                            if(error) {
                                enqueueSnackbar('Woops! Something went wrong, please try again', {
                                    variant: 'error',
                                    autoHideDuration: 5000
                                });
                            }
                        })
        }   
    }

    const getCaptilizeFirstLetter = (word) => {
        const firstLetter = word.charAt(0);
        const firstLetterCap = firstLetter.toUpperCase();
        const remainingLetters = word.slice(1);

        return firstLetterCap + remainingLetters;
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="d-flex">
                    <select className="form-control mr-1" onChange={handleChange}>
                        <option value={status}>
                            {getCaptilizeFirstLetter(status)}
                        </option> 
                        <option value="pending">Pending</option>
                        <option value="inprogress">Inprogress</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancel">Cancel</option>
                    </select>
                    <button type="submit" className="btn btn-sm btn-primary">Save</button>
                </div>
            </form>
        </>
    );
};

export default BookingStatus;