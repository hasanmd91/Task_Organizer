import React from "react";
import { useAppSelector } from "../rtk/app/hooks";
import SingleTask from "./SingleTask";

interface props {
  setCurrenId: React.Dispatch<React.SetStateAction<string>>;
}

const TaskList: React.FC<props> = ({ setCurrenId }) => {
  const tasksList = useAppSelector((state) => state.tasks.tasks);

  return (
    <div className="tasks">
      {tasksList.map((task) => (
        <SingleTask taskProps={task} setCurrenId={setCurrenId} />
      ))}
    </div>
  );
};

export default TaskList;
