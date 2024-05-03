import axios from "axios";
import { BASE_URL } from "../constant";

axios.defaults.baseURL = BASE_URL;

export const getCategories = async () => {
  return axios.get(`/product-categories`).then((response) => response.data);
};

export const createCategory = async (payload) => {
  return axios
    .post(`/product-categories`, payload)
    .then((response) => response.data);
};

export const updateCategory = async (id, payload) => {
    const data = {...payload, id:id}
  return axios
    .post(`/product-categories/update`, data)
    .then((response) => response.data);
};

export const deleteCategory = async (id) => {
  return axios
    .post(`/product-categories/delete`, {id: id})
    .then((response) => response.data);
};