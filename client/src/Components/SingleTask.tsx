import React from "react";
import { task } from "./../App";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useAppDispatch } from "../rtk/app/hooks";
import { deleteTask } from "../rtk/features/tasks/tasksSlice";

interface props {
  taskProps: task;
  setCurrenId: React.Dispatch<React.SetStateAction<string>>;
}

const SingleTask: React.FC<props> = ({ taskProps, setCurrenId }) => {
  // Get the `dispatch` function from the Redux store

  const dispatch = useAppDispatch();
  return (
    // Render a single task with an edit and delete button

    <div className="task_single">
      <span className="task_single_text ">{taskProps.title} </span>

      <div>
        <span className="icon">
          <AiFillEdit onClick={() => setCurrenId(taskProps._id)} />
        </span>
        <span className="icon ">
          <AiFillDelete onClick={() => dispatch(deleteTask(taskProps._id))} />
        </span>
      </div>
    </div>
  );
};

export default SingleTask;
