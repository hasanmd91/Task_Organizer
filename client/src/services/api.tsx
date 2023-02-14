import axios from "axios";

const baseUrl = "http://localhost:3001/tasks";

export const getAll = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};

export const Create = async (newtask: any) => {
  const { data } = await axios.post(baseUrl, newtask);
  return data;
};

export const Delete = async (id: any) => {
  await axios.delete(`${baseUrl}/${id}`);
};
