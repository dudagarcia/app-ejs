import api from './api';

export const createSection = async (data) =>{
    return await api.post("/section/create", data);
}

export const updateSection = async (data) => {
    return await api.put("/section/update", data);
}

api.delete("/section/delete", { id });

api.get("/section/list")
    .then((response) => doAlgo(response.data))
    .catch((err) => {
        console.error("erro select user" + err);
    });