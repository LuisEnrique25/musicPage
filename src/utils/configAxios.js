import axios from "axios";

const axiosMusic = axios.create({
    baseURL: "https://backend-final-projectreact-dev-pbdc.2.us-1.fl0.io"
});

export { axiosMusic }