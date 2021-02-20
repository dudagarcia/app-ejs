import api from './api';

const response = await api.post("/roles/create", { name, contributors, status, description });

const response2 = await api.put("/roles/update", { name, contributors, status, description, id });

api.delete("/roles/delete", { id });

api.get("/roles/list")
    .then((response) => doAlgo(response.data))
    .catch((err) => {
        console.error("erro select user" + err);
    });