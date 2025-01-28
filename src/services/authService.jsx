import http from "../lib/http-common";

let API_URL = import.meta.env.VITE_API_BACKEND_URL + '/api/';

const getAuthHeaders = () => {
    const token = JSON.parse(localStorage.getItem('token')); 
    return {
        'Authorization': token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };
};

const register = (formData) => {
    return http.post(API_URL + 'register', formData)
                .then((response) => {
                    if(response.data.accessToken) {
                        localStorage.setItem('token', JSON.stringify(response.data.accessToken))
                    }

                    return response;
                })
}

const login = (formData) => {
    return http.post(API_URL + 'login', formData)
                .then((response) => {
                    if(response.data.accessToken) {
                        localStorage.setItem('token', JSON.stringify(response.data.accessToken))
                    }

                    return response;
                })
}

const logout = () => {
    return http.get(API_URL + 'logout', { headers: getAuthHeaders() })
                .then((response) => {
                    if(response.data.success) {
                        localStorage.removeItem('token')
                    }

                    return response;
                })
}

const authService = {
    register,
    login,
    logout
};

export default authService;