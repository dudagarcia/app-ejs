import api from './api';

export const listActiveProjects = async () => {

    return await api.post("/projects/list", {status: true});
}

export const listNotActiveProjects = async () => {

    return await api.post("/projects/list", {status: false});
}
