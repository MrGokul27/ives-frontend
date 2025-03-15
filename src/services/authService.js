import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
};

export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data;
};

export const loginAdmin = async (userData) => {
    const response = await axios.post(`${API_URL}/admin/login`, userData);
    return response.data;
};