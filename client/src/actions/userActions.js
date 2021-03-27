import * as api from '../api/index.js';

export const loginUser = async (formData) => {
    try {
        const res = await api.login(formData);
        return res.data;
    }catch(err) {
        console.log(err);
    }
}

export const registerUser = async (formData) => {
    try {
        const res = await api.register(formData);
        return res.data;
    }catch(err) {
        console.log(err);
    }
}


export const getUsers = async () => {
    try {
        const {data} = await api.getUsers();
        console.log(data);
        return data.result;
    }catch(err) {
        console.log(err);
    }
}