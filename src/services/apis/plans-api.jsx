import axios from "axios";
import { BASE_URL } from "../constant";

axios.defaults.baseURL = BASE_URL;

export const getPlansApi = async () => {
  return axios.get(`/admin/plans`).then((response) => response.data);
};

export const createPlanApi = async (payload) => {
  return axios
    .post(`/admin/plans`, payload)
    .then((response) => response.data);
};

export const updatePlanApi = async (id, payload) => {
  const main ={...payload, id:id}
  return axios
    .post(`/admin/plans/update`, main)
    .then((response) => response.data);
};

export const deletePlanApi = async (id) => {
  return axios
    .post(`/admin/plans/delete`, {id: id})
    .then((response) => response.data);
};