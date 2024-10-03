import axios from "axios";

export const getStatsApi = async () => {
    return axios.get(`/dashboard/stats?year=2024&plan_year=`).then((response) => response.data.data);
  };
  