import axios from 'axios';

const api = axios.create({
    baseURL: 'https://internauth-api.great-site.net/index.php/api', // Your CodeIgniter backend URL
});

// Automatically attach the JWT token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;