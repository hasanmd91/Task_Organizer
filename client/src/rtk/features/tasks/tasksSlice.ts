import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAll, Create } from "../../../services/api";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../app/store";
interface Task {
  title: string;
}

interface TaskState {
  tasks: Task[];
  isLoading: boolean;
}

const initialState: TaskState = {
  tasks: [],
  isLoading: true,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
    },

    createAtask(state, action: PayloadAction<Task>) {
      state.tasks = [...state.tasks, action.payload];
    },

    isLoading(state) {
      state.isLoading = false;
    },
  },
});

export const initializeTasks = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    const task = await getAll();
    dispatch(getTasks(task));
    dispatch(isLoading());
  };
};

export const createTask = (
  newTask: Task
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const task = await Create(newTask);
    dispatch(createAtask(task));
  };
};

export default tasksSlice.reducer;
export const { getTasks, isLoading, createAtask } = tasksSlice.actions;
