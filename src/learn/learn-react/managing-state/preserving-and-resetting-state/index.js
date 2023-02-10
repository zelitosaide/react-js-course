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
      <CounterContainer5 />
      <CounterContainer />
      <MyComponent />
      <Scoreboard />
    </div>
  );
}

function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(false);

  return (
    <div>
      {isPlayerA ? <Counter person="Taylor" /> : <Counter person="Sarah" />}
      <button
        onClick={function () {
          setIsPlayerA(!isPlayerA);
        }}
      >
        Next player!
      </button>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }

  return <div className={className}></div>;
}

function MyComponent() {
  const [counter, setCounter] = useState(0);

  function MyTextField() {
    const [text, setText] = useState("");

    return (
      <input
        value={text}
        onChange={function (e) {
          setText(e.target.value);
        }}
      />
    );
  }

  return (
    <>
      <MyTextField />
      <button
        onClick={function () {
          setCounter(counter + 1);
        }}
      >
        Clicked {counter} times
      </button>
    </>
  );
}

function CounterContainer() {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div>
      {isFancy ? (
        <div>
          <Counter3 isFancy={true} />
        </div>
      ) : (
        <section>
          <Counter3 isFancy={false} />
        </section>
      )}
      <label style={{ display: "block", clear: "both" }}>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={function (e) {
            setIsFancy(e.target.checked);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}

function CounterContainer5() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div>
      {isPaused ? <p>See you later!</p> : <Counter2 />}
      <label style={{ display: "block", clear: "both" }}>
        <input
          type="checkbox"
          checked={isPaused}
          onChange={function (e) {
            setIsPaused(e.target.checked);
          }}
        />{" "}
        Take a break
      </label>
    </div>
  );
}

function CounterContainer4() {
  const [isFancy, setIsFancy] = useState(false);

  if (isFancy) {
    return (
      <div>
        <Counter3 isFancy={true} />
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
      <Counter3 isFancy={false} />
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
        <Counter3
          isFancy={true}
          p={1}
        />
      ) : (
        <Counter3 isFancy={false} />
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

function Counter3({ isFancy, p }) {
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
