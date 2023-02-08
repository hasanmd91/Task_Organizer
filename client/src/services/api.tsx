import axios from "axios";

const baseUrl = "http://localhost:5000/tasks";

export const getAll = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};
