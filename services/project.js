import api from './api';

export const createProject = async (data) => {
    return await api.post("/projects/create", data);
}

export const createProject = await api.post("/projects/create", { name, contributors, status, description });

const updateProject = await api.put("/projects/update", { name, contributors, status, description, id });

const listProjects = async => {
    return api.get("/projects/list")
            .then((response) => doAlgo(response.data))
            .catch((err) => {
            console.error("erro select user" + err);
        }); 
}

