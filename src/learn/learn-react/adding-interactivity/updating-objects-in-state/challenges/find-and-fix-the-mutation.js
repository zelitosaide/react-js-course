/**
 * Challenge 2 of 3: Find and fix the mutation
 *
 * There is a draggable box on a static background. You can change the
 * box’s color using the select input.
 *
 * But there is a bug. If you move the box first, and then change its color,
 * the background (which isn’t supposed to move!) will “jump” to the box
 * position. But this should not happen: the Background’s position prop is set
 * to initialPosition, which is { x: 0, y: 0 }. Why is the background moving
 * after the color change?
 *
 * Find the bug and fix it.
 */

import { useState } from "react";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function Index() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  return (
    <>
      <select>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
    </>
  );
}

function Background({ position }) {
  return (
    <div
      style={{
        position: "absolute",
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: 250,
        height: 250,
        background: "rgba(200, 200, 0, 0.2)",
      }}
    ></div>
  );
}

function Box({ children, color, position, onMove }) {
  const [lastCoordinates, setLastCoordinates] = useState(null);

  function handlePoinderDown(e) {
    e.target.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }

  function handlePointerUp() {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePoinderDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: "grab",
        background: color,
        position: "absolute",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </div>
  );
}
