import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAll, Create, Delete } from "../../../services/api";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../app/store";
interface Task {
  title: string;
  _id: string;
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

    deleteATask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload);
    },
    isLoading(state) {
      state.isLoading = false;
    },
  },
});

//get task thunk

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

//create task thunk

export const createTask = (
  newTask: Task
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const task = await Create(newTask);
    dispatch(createAtask(task));
  };
};

// delete task thunk

export const deleteTask = (
  id: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    await Delete(id);
    dispatch(deleteATask(id));
  };
};

// edit task thunk

export default tasksSlice.reducer;
export const { getTasks, isLoading, createAtask, deleteATask } =
  tasksSlice.actions;
