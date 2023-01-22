import React from "react";
import Singletodo from "./Singletodo";
import { Todo } from "./../Modal";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <Singletodo todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default Todolist;
