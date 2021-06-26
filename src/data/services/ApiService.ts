import axios from 'axios';

//'http://127.0.0.1:8000/'
//https://ediaristas-workshop.herokuapp.com
const url = 'https://ediaristas-workshop.herokuapp.com';

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  }
});
