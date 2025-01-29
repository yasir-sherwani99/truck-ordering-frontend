import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { useAuth } from '../../../context/AuthContext';
import AdminDashboardLayout from '../../../theme/AdminDashboardLayout';
import adminService from '../../../services/adminService';
import BookingStatus from '../../../components/common/BookingStatus';

const BookingDetailsPage = () => {

    const { id } = useParams();
    const { authData } = useAuth();
    const [statsData, setStatsData] = useState("");
    const [bookingsData, setBookingsData] = useState("");

    useEffect(() => {
        adminService.getBookingDetails(id)
                .then((res) => {
                    setBookingsData(res.data.data)
                    setStatsData(res.data.data.stats)
                })
    }, []);

    if(!authData.isAdminAuthenticated) {
        return <Navigate to="/admin" />
    }

    return (
        <AdminDashboardLayout data={statsData && (statsData)}>
            {bookingsData && (
                <>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Booking Details</h1>
                    </div>
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th scope="col">Status</th>
                                <td>
                                    <BookingStatus
                                        id={bookingsData.booking.id}
                                        status={bookingsData.booking.status} 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">Client</th>
                                <td>{bookingsData.booking.first_name + " " + bookingsData.booking.last_name}</td>
                            </tr>
                            <tr>
                                <th scope="col">Email</th>
                                <td>{bookingsData.booking.email}</td>
                            </tr>
                            <tr>
                                <th scope="col">Phone</th>
                                <td>{bookingsData.booking.phone}</td>
                            </tr>
                            <tr>
                                <th scope="col">Company</th>
                                <td>{bookingsData.booking.company ? bookingsData.booking.company : ""}</td>
                            </tr><tr>
                                <th scope="col">Pickup Address</th>
                                <td>{bookingsData.booking.pickup_address}</td>
                            </tr>
                            <tr>
                                <th scope="col">Delivery Address</th>
                                <td>{bookingsData.booking.delivery_address}</td>
                            </tr>
                            <tr>
                                <th scope="col">Cargo Type</th>
                                <td>{bookingsData.booking.cargo_type}</td>
                            </tr>
                            <tr>
                                <th scope="col">Cargo Weight</th>
                                <td>{bookingsData.booking.cargo_weight}</td>
                            </tr>
                            <tr>
                                <th scope="col">Cargo Type</th>
                                <td>{bookingsData.booking.cargo_type}</td>
                            </tr>
                            <tr>
                                <th scope="col">Truck Type</th>
                                <td>{bookingsData.booking.truck_type}</td>
                            </tr>
                            <tr>
                                <th scope="col">No. of Trucks</th>
                                <td>{bookingsData.booking.truck_qty}</td>
                            </tr>
                            <tr>
                                <th scope="col">Pickup Date</th>
                                <td>{bookingsData.booking.pickup_date}</td>
                            </tr>
                            <tr>
                                <th scope="col">Delivery Date</th>
                                <td>{bookingsData.booking.delivery_date}</td>
                            </tr>
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

export default BookingDetailsPage;