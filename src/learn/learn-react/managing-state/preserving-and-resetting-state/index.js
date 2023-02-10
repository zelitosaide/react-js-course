import { useState } from "react";

export default function Index() {
  const counter = <Counter2 />;

  return (
    <div>
      {counter}
      {counter}
      <Counter2 />
      <Counter2 />
      <CounterContainer />
    </div>
  );
}

function CounterContainer() {
  const [showB, setShowB] = useState(true);

  return (
    <div>
      <Counter2 />
      {showB && <Counter2 />}
      <label style={{ display: "block", clear: "both" }}>
        <input
          type="checkbox"
          checked={showB}
          onChange={function (e) {
            setShowB(e.target.checked);
          }}
        />{" "}
        Render the second counter
      </label>
    </div>
  );
}

function Counter2() {
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
