import axios from "axios";
import { BASE_URL } from "../constant";

axios.defaults.baseURL = BASE_URL;

export const createBannerApi = async (payload) => {
  return axios
    .post(`/admin/banner/post`, payload)
    .then((response) => response.data);
};

export const updateBannerApi = async ( payload) => {
  
  console.log( payload)
  return axios
    .post(`/admin/banner/update`, payload)
    .then((response) => response.data);
};
export const getBannerApi = async () => {
  return axios.get(`/admin/banners`).then((response) => response.data);
};

export const deleteBannerApi = async (id) => {
  console.log(id)
  return axios.post(`/admin/banner/delete?banner_id=${id}`).then((response) => response.data);
};
