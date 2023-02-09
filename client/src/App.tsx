import React, { useEffect, useState } from "react";
import { initializeTasks, createTask } from "./rtk/features/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "./rtk/app/hooks";

interface task {
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

  const submitHandeler = (e: React.FormEvent<HTMLFormElement>) => {
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
        <form onSubmit={submitHandeler}>
          <input
            type="text"
            name="title"
            value={newTask.title as string}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <button type="submit"> Sumbit</button>
        </form>

        <div>{tasksList.map((tsk: task): any => console.log(tsk))}</div>
      </div>
    );
};

export default App;
