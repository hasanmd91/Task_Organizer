import React, { useRef } from "react";
import "./style.css";

//In TypeScript, angle brackets <> are used to specify the type of a variable. In this case, it is saying that the "todo" state variable is of type string.
interface InputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  submitHandeler: (e: React.FormEvent) => void;
}

const Inputfield: React.FC<InputProps> = ({
  todo,
  setTodo,
  submitHandeler,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        submitHandeler(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input__submit">
        {" "}
        Go
      </button>
    </form>
  );
};

export default Inputfield;
