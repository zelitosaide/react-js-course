import { useState } from "react";

import "./style.css";

export default function TicTacToe() {
  return <Board />;
}

export function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    console.log("clicked:");
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
