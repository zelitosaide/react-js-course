import { useState } from "react";

export default function Index() {
  const counter = <Counter />;

  return (
    <div>
      {counter}
      {counter}
      <Counter />
      <Counter />
      <CounterApp />
    </div>
  );
}

function CounterApp() {}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={function () {
        setHover(true);
      }}
      onPointerLeave={function () {
        setHover(false);
      }}
    >
      <h1>{score}</h1>
      <button
        onClick={function () {
          setScore(score + 1);
        }}
      >
        Add one
      </button>
    </div>
  );
}
