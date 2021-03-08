import api from './api';

export const createTask = async(data) => {
    return await api.post("/tasks/create", data);
}

export const updateTask = async(data) => {
    return await api.put("/tasks/update", data);
}

export const listDone = async(data) => {
    return await api.post("/tasks/listDone");
}

export const getMyTasks = async (data) => {

    return await api.post("/tasks/list", data);
}

export const toggleDone = async (data) => {

    return await api.post("/tasks/toggleDone", data);
}
