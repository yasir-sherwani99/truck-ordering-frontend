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

const getAdminAuthHeaders = () => {
    const token = JSON.parse(localStorage.getItem('admin_token')); 
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

const adminlogin = (formData) => {
    return http.post(API_URL + 'admin/login', formData)
                .then((response) => {
                    if(response.data.accessToken) {
                        localStorage.setItem('admin_token', JSON.stringify(response.data.accessToken))
                    }

                    return response;
                })
}

const adminlogout = () => {
    return http.get(API_URL + 'admin/logout', { headers: getAdminAuthHeaders() })
                .then((response) => {
                    if(response.data.success) {
                        localStorage.removeItem('admin_token')
                    }

                    return response;
                })
}

const authService = {
    register,
    login,
    logout,
    adminlogin,
    adminlogout
};

export default authService;