import axios from 'axios';
import {BASE_URL} from './url';

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json',
    },
});

export {axiosClient};
