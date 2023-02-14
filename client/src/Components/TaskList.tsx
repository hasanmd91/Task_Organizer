import React from "react";
import { useAppSelector } from "../rtk/app/hooks";
import SingleTask from "./SingleTask";

const TaskList: React.FC = () => {
  const tasksList = useAppSelector((state) => state.tasks.tasks);

  return (
    <div className="tasks">
      {tasksList.map((task) => (
        <SingleTask taskProps={task} />
      ))}
    </div>
  );
};

export default TaskList;
