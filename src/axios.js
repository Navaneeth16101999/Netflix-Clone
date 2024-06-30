import axios from "axios";
import { baseUrl } from "./constants/constant";
const axiosInstance = axios.create({
    baseURL: baseUrl,

  });
  
  export default axiosInstance;