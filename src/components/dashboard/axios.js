import axios from "axios";
let accessToken = localStorage.getItem("access_token");
const axiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});
export default axiosInstance;
