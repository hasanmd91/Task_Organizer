import React, { useEffect, useState } from "react";
import {
  initializeTasks,
  createTask,
  editTask,
} from "./rtk/features/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "./rtk/app/hooks";
import InputField from "./Components/InputField";
import TaskList from "./Components/TaskList";
import "./App.css";

// Define a type for a task object
export interface task {
  [x: string]: any;
  title: string;
}

const App: React.FC = () => {
  // Get the dispatch function from the Redux store
  const dispatch = useAppDispatch();

  // Get the isLoading state from the Redux store
  const isLoading = useAppSelector((state) => state.tasks.isLoading);

  // Set up state variables for the current task ID and the new task object
  const [currenId, setCurrenId] = useState<string>("");
  const [newTask, setNewTask] = useState<task>({
    title: "",
  });

  // Define a function to handle the form submit event
  const submitHandeler = (e: React.FormEvent) => {
    e.preventDefault();
    // If the task title is empty, do not create or edit the task
    if (!newTask.title) return;

    // If there is a current task ID, edit the task with that ID
    if (currenId) {
      dispatch(editTask(newTask, currenId));
    } else {
      // If there is no current task ID, create a new task
      dispatch(createTask(newTask));
    }
    // Reset the current task ID and clear the new task input field
    setCurrenId("");
    clear();
  };

  // Define a function to clear the new task input field
  const clear = () => {
    setNewTask({ title: "" });
  };

  // Load the tasks from the Redux store when the component is mounted
  useEffect(() => {
    dispatch(initializeTasks());
  }, [dispatch]);

  // Show a loading message if tasks are being fetched from the server
  if (isLoading) return <div>Loading...</div>;
  // Render the app components
  else
    return (
      <div className="App">
        <span className="heading">Taska</span>
        <InputField
          currenId={currenId}
          newTask={newTask}
          setNewTask={setNewTask}
          handelSubmit={submitHandeler}
        />
        <TaskList setCurrenId={setCurrenId} />
      </div>
    );
};

// Export the App component as the default export of this module
export default App;
