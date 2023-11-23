import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_CX = process.env.REACT_APP_API_CX;

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: API_KEY,
  cx: API_CX,
};

export const fetchDatafromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      ...params,
      ...payload,
    },
  });
  return data;
};
