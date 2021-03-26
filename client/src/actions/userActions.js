import * as api from '../api/index.js';

export const loginUser = async (formData) => {
    try {
        const res = await api.login(formData);

        if(res.status === 200) {
            console.log(res.data);
            return res.data;
        } else {
            alert(res.message);
            return null;
        }
    }catch(err) {
        alert("Unable to login user. Try checking email/password");
        return null;
    }
}

export const registerUser = async (formData) => {
    try {
        const res = await api.register(formData);
        if(res.status === 200) {
            return res.data;
        } else {
            alert(res.message);
            return null;
        }
    }catch(err) {
        alert("Unable to register user. Try checking email/password");
        return null;
    }
}


export const getUsers = async () => {
    try {
        const res = await api.getUsers();
        if(res.status === 200) {
            return res.data.result;
        } else {
            console.log(res);
            alert(res.data.message);
            return [];
        }
    }catch(err) {
        alert("Unable to get users.");
    }
}