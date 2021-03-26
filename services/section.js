import api from './api';

export const listAllSections = async () => {

    return await api.post("/section/list");
}
export const createSection = async (data) =>{
    return await api.post("/section/create", data);
}

export const updateSection = async (data) => {
    return await api.post("/section/update", data);

}

export const deleteSection = async (data) => {
    return await api.post("/section/delete", data);
}
