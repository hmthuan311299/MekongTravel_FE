import axios from 'axios'

const axios_instance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        accept: 'application/json'
    }
});

export default axios_instance;