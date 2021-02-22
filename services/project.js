import api from './api';

export const listActiveProjects = async () => {

    return await api.post("/projects/list", {status: true});
}

export const listNotActiveProjects = async () => {

    return await api.post("/projects/list", {status: false});
}

export const createProject = async (data) => {
    return await api.post("/projects/create", data)
}

export const updateProject = async (data) => {
    return await api.post("/projects/update", data)
}
