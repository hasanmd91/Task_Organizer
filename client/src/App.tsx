import React from "react";
import { useState } from "react";
import "./App.css";
import Inputfield from "./Components/Inputfield";
import { Todo } from "./Modal";
import Todolist from "./Components/Todolist";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const submitHandeler = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { _id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");

      console.log(todos);
    }
  };

  return (
    <div className="App">
      <span className="heading "> Taska </span>
      <Inputfield
        todo={todo}
        setTodo={setTodo}
        submitHandeler={submitHandeler}
      />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
