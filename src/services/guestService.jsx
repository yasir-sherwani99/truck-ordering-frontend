import http from '../lib/http-common';

let API_URL = import.meta.env.VITE_API_BACKEND_URL + '/api/';

const storeTruckBooking = (data) => {
    return http.post(API_URL + "booking", data);
}

const guestService = {
    storeTruckBooking
}

export default guestService;