import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.TMDB_BASE_URL,
  params: {
    api_key: process.env.TMDB_API_KEY
  },
  headers: {
    Accept: "application/json",
    "Accept-Encoding": "identity"
  }
});

const get = async (url) => {
  const response = await axiosClient.get(url);
  return response.data;
};

export default { get };
