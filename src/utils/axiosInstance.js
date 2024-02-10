import axios from "axios";
const axiosinstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: { "X-Custom-Header": "Pinto", "Content-Type": "application/json" },
});
export default axiosinstance;
