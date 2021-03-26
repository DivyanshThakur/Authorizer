import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5000"});

export const login = (formData) => API.post('/auth/login', formData);
export const register = (formData) => API.post('/auth/register', formData);
export const getUsers = () => API.get('/users');