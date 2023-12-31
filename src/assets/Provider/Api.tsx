import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL

const Api = axios.create({ baseURL });

export default Api;
