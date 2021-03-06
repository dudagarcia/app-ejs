import api from './api';

export const createTask = async (data) => {

    return await api.post("/tasks/create", data);
}

export const updateTask = async (data) => {

    return await api.post("/tasks/update", data);
}

export const getMyTasks = async (data) => {

    return await api.post("/tasks/get", data);
}