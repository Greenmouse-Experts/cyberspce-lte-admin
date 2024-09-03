import axios from "axios";
import { BASE_URL } from "../constant";

axios.defaults.baseURL = BASE_URL;

export const updateContact = async ( payload) => {
    const main ={payload}
    return axios
      .post(`/admin/office`, main)
      .then((response) => response.data);
  };

  export const getContact = async () => {
 
    return axios
      .get(`/admin/offices`)
      .then((response) => response.data?.data);
  };
  
  //terms and conditions
  export const updateTerms = async ( payload) => {

    return axios
      .post(`/admin/term/condition`, payload)
      .then((response) => response?.data);
  };

  export const getTerms = async () => {
 
    return axios
      .get(`/admin/terms/conditions`)
      .then((response) => response?.data?.data);
  };
  

    //privacy policy
    export const updatePolicy = async ( payload) => {

      return axios
        .post(`/admin/privacy/policy`, payload)
        .then((response) => response?.data);
    };
  
    export const getPolicy = async () => {
   
      return axios
        .get(`/admin/privacy/policies`)
        .then((response) => response?.data?.data);
    };
    

      //about us
      export const updateAbout = async ( payload) => {

        return axios
          .post(`/admin/addOrUpdateAbout`, payload)
          .then((response) => response?.data);
      };
    
      export const getAbout = async () => {
     
        return axios
          .get(`/admin/abouts`)
          .then((response) => response?.data?.data);
      };
      