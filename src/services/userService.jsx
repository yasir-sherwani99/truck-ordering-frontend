import http from '../lib/http-common';

let API_URL = import.meta.env.VITE_API_BACKEND_URL + '/api/';

const getAuthHeaders = () => {
    const token = JSON.parse(localStorage.getItem('token')); 
    return {
        'Authorization': token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };
};

const getBookings = () => {
    return http.get(API_URL + "bookings", { headers: getAuthHeaders() });
}

const userService = {
    getBookings
}

export default userService;