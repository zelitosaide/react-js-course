import { useState } from "react";

export default function Index() {
  return (
    <>
      <MovingDot />
      <Form />
    </>
  );
}

function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });
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
        // const nextPosition = {};
        // nextPosition.x = e.clientX;
        // nextPosition.y = e.clientY;
        // setPosition(nextPosition);

        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
    >
      <div
        style={{
          position: "absolute",
          background: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
