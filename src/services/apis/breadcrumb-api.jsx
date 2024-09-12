import axios from "axios";
import { BASE_URL } from "../constant";

axios.defaults.baseURL = BASE_URL;

export const createBreadCrumbApi = async (payload) => {
  return axios
    .post(`/admin/breadcrumb/post`, payload)
    .then((response) => response.data);
};

export const updateBreadCrumbApi = async (id, payload) => {
  const main = { ...payload, id: id };
  return axios
    .post(`/admin/breadcrumb/update`, main)
    .then((response) => response.data);
};
export const getBreadCrumbApi = async () => {
  return axios.get(`/admin/breadcrumbs`).then((response) => response.data);
};
