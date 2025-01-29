import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { useAuth } from '../../../context/AuthContext';
import DashboardLayout from '../../../theme/DashboardLayout';
import userService from '../../../services/userService';

const BookingPage = () => {

    const { authData } = useAuth();
    const [bookings, setBookings] = useState("");

    if(!authData.isAuthenticated) {
        return <Navigate to="/login" />
    }

    useEffect(() => {
        userService.getBookings()
                .then((res) => {
                    setBookings(res.data.bookings)
                })
    }, []);

    const getStatus = (status) => {
        if(status == "pending") {
            return (<span className="badge badge-warning">Pending</span>);
        } else if(status == "delivered") {
            return (<span className="badge badge-success">Delivered</span>);
        } else if(status == "cancel") {
            return (<span className="badge badge-danger">Cancel</span>);
        } else {
            return (<span className="badge badge-primary">In Progress</span>);
        }
    }

    return (
        <DashboardLayout>
            {bookings && (
                <>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">My Bookings</h1>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Cargo Type</th>
                                <th scope="col">Cargo Weight</th>
                                <th scope="col">Truck Type</th>
                                <th scope="col">No. of Trucks</th>
                                <th scope="col">Pickup Date</th>
                                <th scope="col">Delivery Date</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.length > 0 ? 
                                <>
                                    {bookings.map((book, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{book.cargo_type}</td>
                                            <td>{book.cargo_weight}</td>
                                            <td>{book.truck_type}</td>
                                            <td className="text-center">{book.truck_qty}</td>
                                            <td>{book.pickup_date}</td>
                                            <td>{book.delivery_date}</td>
                                            <td>
                                                {getStatus(book.status)}
                                            </td>
                                        </tr>
                                    ))}
                                </>
                                :
                                <tr>
                                    <td colSpan={8} className="text-center">No Booking Found!</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </>
            )}
            {!bookings && (
                <div className="row my-4">
                    <div className="col-md-12 text-center">
                        <CircularProgress
                            color="primary"
                            size="2.0rem"
                            thickness={3.6} 
                        />
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
};

export default BookingPage;