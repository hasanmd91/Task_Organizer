import React, { useEffect } from "react";
import { initializeTasks } from "./rtk/features/tasks/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "redux";

const App: React.FC = () => {
  const dispatch: any = useDispatch();
  const tasksList = useSelector((state: any) => state.tasks.tasks);
  console.log(tasksList);

  useEffect(() => {
    dispatch(initializeTasks());
  }, [dispatch]);

  return <div> App</div>;
};

export default App;
