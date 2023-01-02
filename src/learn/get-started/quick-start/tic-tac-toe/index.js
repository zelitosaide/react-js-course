import { useState } from "react";

import "./style.css";

export default function TicTacToe() {
  return <Board />;
}

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={function () {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onSquareClick={function () {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onSquareClick={function () {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

export function Square({ value, onSquareClick }) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
