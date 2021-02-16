import api from './api';

api.get("/user/login")
    .then((response) => doSomething(response.data))
    .catch((err) => {
        console.error("erro login" + err);
    });
    
const response = await api.post("/user/create", { email, password, admin });

const response2 = await api.put("/user/update", { name, birthDate, age, email, password, phoneNumber, sectionId, roleId, photo, emailCode, admin, id });

api.delete("/user/delete", { id });

api.get("/user/select")
    .then((response) => doAlgo(response.data))
    .catch((err) => {
        console.error("erro select user" + err);
    });

api.get("/user/listAll")
    .then((response) => doAlgo(response.data))
    .catch((err) => {
        console.error("erro select user" + err);
    });

api.get("/user/listSome")
    .then((response) => doAlgo(response.data))
    .catch((err) => {
        console.error("erro select user" + err);
    });