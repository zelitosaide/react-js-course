import { useState } from "react";

export default function Index() {
  const counter = <Counter2 />;

  return (
    <div>
      {counter}
      {counter}
      <Counter2 />
      <Counter2 />
      <CounterContainer2 />
      <CounterContainer3 />
      <CounterContainer4 />
      <CounterContainer />
    </div>
  );
}

function CounterContainer() {}

function CounterContainer4() {
  const [isFancy, setIsFancy] = useState(false);

  if (isFancy) {
    return (
      <div>
        <Counter isFancy={true} />
        <label style={{ display: "block", clear: "both" }}>
          <input
            type="checkbox"
            checked={isFancy}
            onChange={function (e) {
              setIsFancy(e.target.checked);
            }}
          />{" "}
          Use fancy styling
        </label>
      </div>
    );
  }

  return (
    <div>
      <Counter isFancy={false} />
      <label style={{ display: "block", clear: "both" }}>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={function (e) {
            setIsFancy(e.target.checked);
          }}
        />{" "}
        Use fancy styling
      </label>
    </div>
  );
}

function CounterContainer3() {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div>
      {isFancy ? (
        <Counter
          isFancy={true}
          p={1}
        />
      ) : (
        <Counter isFancy={false} />
      )}
      <label style={{ display: "block", clear: "both" }}>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={function (e) {
            setIsFancy(e.target.checked);
          }}
        />{" "}
        Use fancy styling
      </label>
    </div>
  );
}

function Counter({ isFancy, p }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }
  if (isFancy) {
    className += " fancy";
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
        Add one {p}
      </button>
    </div>
  );
}

function CounterContainer2() {
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
