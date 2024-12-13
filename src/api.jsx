import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const getTasks = async () => {
    const response = await axios.get(`${API_BASE_URL}/tasks`);
    return response.data;
};

export const addTask = async (task) => {
    const response = await axios.post(`${API_BASE_URL}/tasks`, task);
    return response.data;
};
