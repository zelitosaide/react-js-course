import { useState } from "react";

export default function Index() {
  return <TrafficLight />;
}

function TrafficLight() {
  const [walk, setWalk] = useState(false);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? "Stop is next" : "Walk is next");
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1 style={{ color: walk ? "darkgreen" : "darkred" }}>
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}
