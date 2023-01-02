import "./style.css";

export default function TicTacToe() {
  return <Square />;
}

export function Square() {
  return <button className="square">X</button>;
}
