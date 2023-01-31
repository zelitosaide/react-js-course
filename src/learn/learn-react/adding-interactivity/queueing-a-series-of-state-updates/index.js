import { useState } from "react";

export default function Index() {
  return (
    <>
      <Counter2 />
      <Counter />
    </>
  );
}

function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button>Increase the number</button>
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
