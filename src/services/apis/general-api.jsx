import axios from "axios";
import { BASE_URL } from "../constant";

axios.defaults.baseURL = BASE_URL;

export const updateContact = async ( payload) => {
    const main ={...payload, }
    return axios
      .post(`/admin/office`, main)
      .then((response) => response.data);
  };

  export const getContact = async () => {
 
    return axios
      .get(`/admin/offices`)
      .then((response) => response.data.data);
  };
  