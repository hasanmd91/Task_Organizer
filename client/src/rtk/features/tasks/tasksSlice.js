import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "../../../services/api";

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

    isLoading(state) {
      state.isLoading = !state.isLoading.length;
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

export default tasksSlice.reducer;

export const { getTasks, isLoading } = tasksSlice.actions;
