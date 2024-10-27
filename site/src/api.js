import axios from "axios";

const api = axios.create({
    baseURL: "https://ec2-3-87-212-101.compute-1.amazonaws.com/api/ms-auth"
})

export default api;
