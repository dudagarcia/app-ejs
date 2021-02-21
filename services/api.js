import axios from 'axios';

const api = axios.create({
    baseURL: "http://sintesejrapi-com-br.umbler.net",
});

export default api;