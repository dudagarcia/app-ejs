import api from './api';

export const loginUser = async (data) => {

    return await api.post("/user/login", data);
}

export const createUser = async (data) => {

    return await api.post("/user/create", data);
}

export const updateUser = async (data) => {

    return await api.post("/user/update", data);
}

export const updateCode = async (data) => {
    return await api.post("/user/updateCode", data);
}

export const selectCode = async (data) => {
    return await api.post("/user/Code", data);
}

export const selectUser= async (data) => {
    return await api.post("/user/select", data);
}

export const listAllUsers = async () => {

    return await api.post("/user/listAll");
}

export const searchUserById = async (data) => {
    return await api.post("/user/listSome", data);
}

export const deleteUser = async (data) => {
    return await api.post("/user/delete", data);
}
