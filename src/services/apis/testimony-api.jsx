import axios from "axios";
import { BASE_URL } from "../constant";

axios.defaults.baseURL = BASE_URL;

export const getTestimonysApi = async () => {
  return axios.get(`/testimonies`).then((response) => response.data);
};

export const createTestimonyApi = async (payload) => {
  return axios
    .post(`/testimonies`, payload)
    .then((response) => response.data);
};

export const updateTestimonyApi = async (id, payload) => {
  const main ={...payload, id:id}
  return axios
    .post(`/testimonies/update`, main)
    .then((response) => response.data);
};

export const deleteTestimonyApi = async (id) => {
  return axios
    .post(`/testimonies/delete`, {id: id})
    .then((response) => response.data);
};