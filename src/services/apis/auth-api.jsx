import axios from "axios";
import { BASE_URL } from "../constant.Jsx";
import { getBearerToken } from "../helpers";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = getBearerToken();
axios.interceptors.request.use(
  function(config) {
    const token = getBearerToken(); 
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 40) {
        localStorage.clear()
      return (window.location.href = "/login");
    }
    return Promise.reject(error);
  }
);

export const adminLogin = async(payload) => {
    return  axios.post(`/login/admin`, payload).then((response) => response.data)
  } 

export const updateProfile = async(payload) => {
    return  axios.post(`/auth/update-profile`, payload).then((response) => response.data)
 } 

 export const changePassword = async(payload) => {
  return  axios.post(`/auth/update-password`, payload).then((response) => response.data)
} 