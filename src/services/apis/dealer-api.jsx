import axios from "axios";
import { BASE_URL } from "../constant";

axios.defaults.baseURL = BASE_URL;

export const getDealersApi = async () => {
  return axios.get(`/product-dealer`).then((response) => response.data);
};

export const createDealerApi = async (payload) => {
  return axios
    .post(`/product-dealer`, payload)
    .then((response) => response.data);
};


export const updateDealerApi = async (id, payload) => {
  const main ={...payload, id:id}
  return axios
    .post(`/product-dealer/update`, main)
    .then((response) => response.data);
};

export const deleteDealerApi = async (id) => {
  return axios
    .post(`/product-dealer/delete`, {id: id})
    .then((response) => response.data);
};