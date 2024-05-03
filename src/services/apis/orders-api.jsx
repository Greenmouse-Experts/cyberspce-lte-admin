import axios from "axios";
import { BASE_URL } from "../constant";

axios.defaults.baseURL = BASE_URL;

export const getOrders = async () => {
  return axios.get(`/admin/orders`).then((response) => response.data);
};

export const auditOrders = async (payload) => {
  return axios
    .post(`/orders/audit`, payload)
    .then((response) => response.data);
};
