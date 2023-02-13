import React from "react";
import { useAppSelector } from "../rtk/app/hooks";

const TaskList: React.FC = () => {
  const tasksList = useAppSelector((state) => state.tasks.tasks);
  tasksList.map((task) => console.log(task.title));
  return <div className="tasks"></div>;
};

export default TaskList;
