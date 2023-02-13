import React, { useEffect, useState } from "react";
import { initializeTasks, createTask } from "./rtk/features/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "./rtk/app/hooks";
import InputField from "./Components/InputField";

export interface task {
  title: string;
}

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasksList = useAppSelector((state) => state.tasks.tasks);
  const isLoading = useAppSelector((state) => state.tasks.isLoading);

  // console.log(tasksList);

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
      <div>
        <InputField
          newTask={newTask}
          setNewTask={setNewTask}
          handleAdd={submitHandeler}
        />
      </div>
    );
};

export default App;
