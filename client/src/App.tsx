import React, { useEffect, useState } from "react";
import { initializeTasks, createTask } from "./rtk/features/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "./rtk/app/hooks";
import InputField from "./Components/InputField";
import "./App.css";
import TaskList from "./Components/TaskList";

export interface task {
  title: string;
}

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.tasks.isLoading);

  const [newTask, setNewTask] = useState<task>({
    title: "",
  });

  const submitHandeler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createTask(newTask));
  };

  useEffect(() => {
    dispatch(initializeTasks());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  else
    return (
      <div className="App">
        <span className="heading">Taska</span>
        <InputField
          newTask={newTask}
          setNewTask={setNewTask}
          handelSubmit={submitHandeler}
        />
        <TaskList />
      </div>
    );
};

export default App;
