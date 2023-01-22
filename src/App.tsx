import React from "react";
import { useState } from "react";
import "./App.css";
import Inputfield from "./Components/Inputfield";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>(" ");
  return (
    <div className="App">
      <span className="heading "> Taska </span>
      <Inputfield />
    </div>
  );
};

export default App;
