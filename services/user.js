import api from './api';

api.get("/user/login")
    .then((response) => doSomething(response.data))
    .catch((err) => {
        console.error("erro login" + err);
    });
    
export const loginUser = async (data) => {

    return await api.post("/user/login", data);
}

export const createUser = async () => {

    return await api.post("/user/create", { email: "EMAIL@teste", password: "SENHA@teste", admin: true });
}

export const listAllUsers = async () => {

    return await api.post("/user/listAll");
}

export const searchUserById = async (data) => {

    return await api.post("/user/listSome", data);
}
