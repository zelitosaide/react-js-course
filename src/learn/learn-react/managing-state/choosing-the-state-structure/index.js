import { useState } from "react";

export default function Index() {
  return (
    <>
      <MovingDot />
      <FeedbackForm />
    </>
  );
}

function FeedbackForm() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
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
        width: "80vw",
        height: "50vh",
        backgroundColor: "lightblue",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          width: 20,
          height: 20,
          top: -10,
          left: -10,
          transform: `translate(${position.x}px, ${position.y}px)`,
          borderRadius: "50%",
        }}
      />
    </div>
  );
}
