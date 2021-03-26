import axios from 'axios';

const API = axios.create({baseURL: "https://authorizer-divyansh.herokuapp.com"});

export const login = (formData) => API.post('/auth/login', formData);
export const register = (formData) => API.post('/auth/register', formData);
export const getUsers = () => API.get('/users');