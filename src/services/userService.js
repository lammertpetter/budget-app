import axios from 'axios';

const API_URL = 'https://budget-g3hgiei71-lammerts-projects.vercel.app/api/user'; // Correct backend URL

export const fetchUserData = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/data`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export const updateUserData = async (data, token) => {
    try {
        const response = await axios.post(`${API_URL}/data`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating user data:', error);
        throw error;
    }
};
