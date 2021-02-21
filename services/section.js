import api from './api';

export const listAllSections = async () => {

    return await api.post("/section/list");
}
