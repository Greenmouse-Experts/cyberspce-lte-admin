import axios from "axios";

export const getStatsApi = async () => {
    return axios.get(`/dashboard/stats?year=2023&plan_year=`).then((response) => response.data.data);
  };
  