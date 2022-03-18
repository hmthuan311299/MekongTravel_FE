import axios from 'axios'

const axios_instance = axios.create({
    baseURL: 'http://10.10.49.10:3000/',
    headers: {
        accept: 'application/json'
    }
});

export default axios_instance;
