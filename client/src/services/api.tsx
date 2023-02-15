import axios from "axios";
import { task } from "../App";

const baseUrl = "http://localhost:3001/tasks";

export const getAll = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};

export const Create = async (newtask: task) => {
  const { data } = await axios.post(baseUrl, newtask);
  return data;
};

export const Delete = async (id: string) => {
  await axios.delete(`${baseUrl}/${id}`);
};

export const Edit = async (newtask: task, id: string) => {
  const { data } = await axios.patch(`${baseUrl}/${id}`, newtask);
  return data;
};
