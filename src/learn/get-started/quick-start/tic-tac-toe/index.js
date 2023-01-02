import { useState } from "react";

import "./style.css";

export default function TicTacToe() {
  return <Board />;
}

export function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
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
        <Square
          value={squares[3]}
          onSquareClick={function () {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onSquareClick={function () {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onSquareClick={function () {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={function () {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onSquareClick={function () {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onSquareClick={function () {
            handleClick(8);
          }}
        />
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
