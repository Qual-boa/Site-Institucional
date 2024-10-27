import axios from "axios";

const apiBlob = axios.create({
    baseURL: "https://ec2-3-87-212-101.compute-1.amazonaws.com/api/ms-blob/blob"
})

export default apiBlob;
