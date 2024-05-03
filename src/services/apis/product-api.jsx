import axios from "axios";
// import { BASE_URL } from "../constant.Jsx";
import {BASE_URL} from "../constant"

axios.defaults.baseURL = BASE_URL;

export const getProducts = async () => {
  return axios.get(`/product`).then((response) => response.data);
};

export const createProduct = async (payload) => {
  return axios
    .post(`/product`, payload)
    .then((response) => response.data);
};

export const updateProduct = async (id, payload) => {
  console.log(payload, id);
  return axios
    .post(`/product/${id}/update`, payload)
    .then((response) => response.data);
};

export const deleteProduct = async (id) => {
  return axios
    .post(`/product/delete`, {id: id})
    .then((response) => response.data);
};