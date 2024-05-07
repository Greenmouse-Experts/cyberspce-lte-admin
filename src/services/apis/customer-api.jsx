import axios from "axios";
import { BASE_URL } from "../constant";

axios.defaults.baseURL = BASE_URL;

export const getCustomersApi = async () => {
  return axios.get(`/customers`).then((response) => response.data);
};

export const getSingleCustomer = async (id) => {
  return axios
    .get(`/customers/${id}`)
    .then((response) => response.data);
};

export const updateCustomerApi = async (payload) => {
  return axios
    .post(`/customers/audit/accessibity`, payload)
    .then((response) => response.data);
};

export const deleteCustomerApi = async (id) => {
  return axios
    .post(`/product-Customer/delete`, {id: id})
    .then((response) => response.data);
};