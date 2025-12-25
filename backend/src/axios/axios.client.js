import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.TMDB_BASE_URL,
  params: {
    api_key: process.env.TMDB_API_KEY
  },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
  }
});

const get = async (url) => {
  try {
    const response = await axiosClient.get(url);
    return response.data;
  } catch (error) {
    console.error(
      "TMDB REQUEST FAILED:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export default { get };
