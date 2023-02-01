import { useState } from "react";

export default function Index() {
  return <MovingDot />;
}

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
      onPointerMove={function (e) {
        position.x = e.clientX;
        position.y = e.clientY;
      }}
    ></div>
  );
}
