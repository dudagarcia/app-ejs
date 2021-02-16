import api from './api';
    
const createAvailabilities = await api.post("/availability/create", { userId, sunday, monday, tuesday, wednesday, thursday, friday, saturday });

const updateAvailabilities = async => {
    return api.put("/availability/update", { sunday, monday, tuesday, wednesday, thursday, friday, saturday, id });
}

const getAvailabilities = async => {
    return api.get('/availability/list');
}

