import axios from "axios";

const baseURL = process.env.REACT_APP_API;

const Api = axios.create({ baseURL });

export default Api;
