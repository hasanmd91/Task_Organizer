import React, { useEffect, useState } from "react";
import { initializeTasks, createTask } from "./rtk/features/tasks/tasksSlice";
import { useDispatch, useSelector } from "react-redux";

interface tasks {
  title: string;
}

const App: React.FC = () => {
  const dispatch: any = useDispatch();
  const tasksList = useSelector((state: any) => state.tasks.tasks);
  const isLoading = useSelector((state: any) => state.tasks.isLoading);

  // console.log(tasksList);

  const [newTask, setNewTask] = useState<tasks>({
    title: "",
  });

  const submitHandeler = (e: any) => {
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
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <button type="submit"> Sumbit</button>
        </form>

        <div>{tasksList.map((tsk: any) => console.log(tsk))}</div>
      </div>
    );
};

export default App;
