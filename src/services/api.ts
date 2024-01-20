import axios from "axios";

const api = axios.create({
    baseURL: "https://api-libretec.vercel.app",
})

export default api;