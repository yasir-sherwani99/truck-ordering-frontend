import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { useAuth } from '../../../context/AuthContext';
import AdminDashboardLayout from '../../../theme/AdminDashboardLayout';
import adminService from '../../../services/adminService';

const BookingsPage = () => {

    const { authData } = useAuth();
    const [statsData, setStatsData] = useState("");
    const [bookingsData, setBookingsData] = useState("");

    useEffect(() => {
        adminService.getBookings()
                .then((res) => {
                    setBookingsData(res.data.data)
                    setStatsData(res.data.data.stats)
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

    if(!authData.isAdminAuthenticated) {
        return <Navigate to="/admin" />
    }

    return (
        <AdminDashboardLayout data={statsData && (statsData)}>
            {bookingsData && (
                <>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Bookings</h1>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Client</th>
                                <th scope="col">Cargo Type</th>
                                <th scope="col">Cargo Weight</th>
                                <th scope="col">Truck Type</th>
                                <th scope="col">No. of Trucks</th>
                                <th scope="col">Pickup Date</th>
                                <th scope="col">Delivery Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookingsData.bookings.length > 0 ? 
                                <>
                                    {bookingsData.bookings.map((book, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{book.first_name + ' ' + book.last_name}</td>
                                            <td>{book.cargo_type}</td>
                                            <td>{book.cargo_weight}</td>
                                            <td>{book.truck_type}</td>
                                            <td className="text-center">{book.truck_qty}</td>
                                            <td>{book.pickup_date}</td>
                                            <td>{book.delivery_date}</td>
                                            <td>
                                                {getStatus(book.status)}
                                            </td>
                                            <td>
                                                <Link to={`/admin/booking/${book.id}/details`}>
                                                    <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                </Link>
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
            {!bookingsData && (
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
        </AdminDashboardLayout>
    );
};

export default BookingsPage;