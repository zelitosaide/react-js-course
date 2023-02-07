import { useState } from "react";

export default function Index() {
  return <MovingDot />;
}

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={function (e) {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightblue",
      }}
    ></div>
  );
}
