import { useState } from "react";

export default function Index() {}

function TrafficLight() {
  const [walk, setWalk] = useState(false);

  function handleClick() {
    setWalk(!walk);
  }

  return (
    <>
      <button onClick={handleClick}></button>
    </>
  );
}
