import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    withCredentials: true // 자격 증명 key값을 쓸거냐에 유무 (기본값: false)
});

export default api
