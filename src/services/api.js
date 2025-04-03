import axios from 'axios';

const API_BASE_URL = 'http://localhost:9091/api'; // Change this if your backend URL is different

export const getVenues = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/venues`);
        return response.data;
    } catch (error) {
        console.error("Error fetching venues:", error);
        return [];
    }
};
