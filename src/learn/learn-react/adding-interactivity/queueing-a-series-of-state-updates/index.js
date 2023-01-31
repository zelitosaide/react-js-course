import { useState } from "react";

export default function Index() {
  const [number, setNumber] = useState(0);
  const [isSent, setIsSent] = useState(false);

  return (
    <>
      <button
        onClick={function () {
          setNumber(number + 1);
          setTimeout(function () {
            setIsSent(!isSent);
          }, 5000);
        }}
      >
        Click me
      </button>
      <p>{number}</p>
      <p>{isSent && "Ola"}</p>
    </>
  );
}
