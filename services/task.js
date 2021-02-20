import api from './api';

const response = await api.post("/tasks/create", { name, details, date, repetition, contributors, done });

const response2 = await api.put("/tasks/update", { name, details, date, repetition, contributors, done, id });

api.get("/tasks/list")
    .then((response) => doAlgo(response.data))
    .catch((err) => {
        console.error("erro select user" + err);
    });