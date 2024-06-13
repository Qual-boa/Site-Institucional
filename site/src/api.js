import axios from "axios";

const api = axios.create({
    baseURL: "https://api-qualaboa.azurewebsites.net"
})

export default api;
