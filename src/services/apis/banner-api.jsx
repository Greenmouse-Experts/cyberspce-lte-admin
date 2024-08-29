import axios from "axios";
import { BASE_URL } from "../constant";

axios.defaults.baseURL = BASE_URL;


export const createBannerApi = async (payload) => {
    return axios
      .post(`/admin/banner/post`, payload)
      .then((response) => response.data);
  };

  export const updateBannerApi = async (id, payload) => {
    const main ={...payload, id:id}
    return axios
      .post(`/product-dealer/update`, main)
      .then((response) => response.data);
  };
  