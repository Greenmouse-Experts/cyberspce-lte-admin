import axios from "axios";
import { BASE_URL } from "../constant";

axios.defaults.baseURL = BASE_URL;

export const createBreadCrumbApi = async (payload) => {
  return axios
    .post(`/admin/breadcrumb/post`, payload)
    .then((response) => response.data);
};

export const updateBreadCrumbApi = async (payload) => {
 
  return axios
    .post(`/admin/breadcrumb/update`, payload)
    .then((response) => response.data);
};
export const getBreadCrumbApi = async () => {
  return axios.get(`/admin/breadcrumbs`).then((response) => response.data);
};

export const deleteBreadCrumbApi = async (id) => {
  return axios.post(`/admin/breadcrumb/delete?breadcrumb_id=${id}`).then((response) => response.data);
};

