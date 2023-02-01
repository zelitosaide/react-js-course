import { useState } from "react";

import FixARequestCounter from "./challenges/fix-a-request-counter";
import ImplementTheStateQueue from "./challenges/implement-the-state-queue";

export default function Index() {
  return (
    <>
      <Counter2 />
      <Counter3 />
      <Counter />
      <FixARequestCounter />
      <ImplementTheStateQueue />
    </>
  );
}

function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={function () {
          setNumber(number + 5);
          setNumber((n) => n + 1);
          setNumber(42);
        }}
      >
        Increase the number
      </button>
    </>
  );
}

function Counter3() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={function () {
          setNumber(number + 5);
          setNumber(function (n) {
            return n + 1;
          });
        }}
      >
        Increase the number
      </button>
    </>
  );
}

function Counter2() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={function () {
          setNumber(function (n) {
            return n + 1;
          });
          setNumber(function (n) {
            return n + 1;
          });
          setNumber(function (n) {
            return n + 1;
          });
        }}
      >
        +3
      </button>
    </>
  );
}
