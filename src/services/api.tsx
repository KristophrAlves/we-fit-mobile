import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 1000,
  headers: {'Authorization': 'Bearer TOKEN'}
});
