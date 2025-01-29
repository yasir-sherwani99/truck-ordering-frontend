import http from '../lib/http-common';

let API_URL = import.meta.env.VITE_API_BACKEND_URL + '/api/admin/';

const getAdminAuthHeaders = () => {
    const token = JSON.parse(localStorage.getItem('admin_token')); 
    return {
        'Authorization': token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };
};

const getDashboard = () => {
    return http.get(API_URL + "dashboard", { headers: getAdminAuthHeaders() });
}

const getBookings = () => {
    return http.get(API_URL + "bookings", { headers: getAdminAuthHeaders() });
}

const getBookingDetails = (id) => {
    return http.get(API_URL + "booking/" + id + "/details", { headers: getAdminAuthHeaders() });
}

const updateBookingStatus = (formData, id) => {
    return http.post(API_URL + "booking/" + id + "/status", formData, { headers: getAdminAuthHeaders() });
}

const adminService = {
    getDashboard,
    getBookings,
    getBookingDetails,
    updateBookingStatus
}

export default adminService;