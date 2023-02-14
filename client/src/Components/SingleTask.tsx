import React from "react";
import { task } from "./../App";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useAppDispatch } from "../rtk/app/hooks";
import { deleteTask } from "../rtk/features/tasks/tasksSlice";

interface props {
  taskProps: task;
  setCurrenId: React.Dispatch<React.SetStateAction<string>>;
}

const SingleTask: React.FC<props> = ({ taskProps, setCurrenId }) => {
  const dispatch = useAppDispatch();
  return (
    <form className="task_single">
      <span className="task_single_text ">{taskProps.title}</span>
      <div>
        <span className="icon">
          <AiFillEdit onClick={() => setCurrenId(taskProps._id)} />
        </span>
        <span className="icon ">
          {" "}
          <AiFillDelete onClick={() => dispatch(deleteTask(taskProps._id))} />
        </span>
        <span className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTask;
