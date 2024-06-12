import axios from "axios";

const apiBlob = axios.create({
    baseURL: "https://api-blob-qualaboa.azurewebsites.net/blob"
})

export default apiBlob;
