import api from './api';

export const loginUser = async (data) => {

    return await api.post("/user/login", data);
}

export const createUser = async (data) => {

    return await api.post("/user/create", data);
}

export const listAllUsers = async () => {

    return await api.post("/user/listAll");
}

export const searchUserById = async (data) => {

    return await api.post("/user/listSome", data);
}
