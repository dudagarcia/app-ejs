import api from './api';

export const createProject = async (data) => {
    return await api.post("/projects/create", data);
}

export const updateProject = async (data) => {
    return await api.put("/projects/update", data);
}

const listProjects = async => {
    return api.get("/projects/list")
            .then((response) => doAlgo(response.data))
            .catch((err) => {
            console.error("erro select user" + err);
        }); 
}

