import React from "react";
import { Todo } from "./../Modal";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Singletodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  // Todo is done
  const isDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form className="todos__single">
      {todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo._id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => isDone(todo._id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default Singletodo;
