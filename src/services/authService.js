import axios from 'axios';

const API_URL = 'https://budget-9ks45pjtz-lammerts-projects.vercel.app/';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        console.error('Error logging in user:', error.response ? error.response.data : error.message);
        throw error;
    }
};
