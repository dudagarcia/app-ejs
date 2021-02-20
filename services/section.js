import api from './api';

const response = await api.post("/section/create", { name, description });

const response2 = await api.put("/section/update", { name, description, id });

api.delete("/section/delete", { id });

api.get("/section/list")
    .then((response) => doAlgo(response.data))
    .catch((err) => {
        console.error("erro select user" + err);
    });