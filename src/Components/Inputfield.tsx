import React from "react";

import "./style.css";

const Inputfield = () => {
  return (
    <form className="input">
      <input type="text" placeholder="enter a task" className="input__box" />
      <button type="submit" className="input__submit">
        {" "}
        Go
      </button>
    </form>
  );
};

export default Inputfield;
