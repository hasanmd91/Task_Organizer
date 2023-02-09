import { createSlice } from "@reduxjs/toolkit";

import { getAll, Create } from "../../../services/api";

// initialState

const initialState = {
  tasks: [],
  isLoading: true,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasks(state, action) {
      state.tasks = action.payload;
    },

    createAtask(state, action) {
      state.tasks = [...state.tasks, action.payload];
    },

    isLoading(state) {
      state.isLoading = false;
    },
  },
});

// initialize tasks fetch

export const initializeTasks = () => {
  return async (dispatch) => {
    const task = await getAll();
    dispatch(getTasks(task));
    dispatch(isLoading());
  };
};

// create a task

export const createTask = (newtask) => {
  return async (dispatch) => {
    const task = await Create(newtask);
    dispatch(createAtask(task));
  };
};

export default tasksSlice.reducer;
export const { getTasks, isLoading, createAtask } = tasksSlice.actions;
