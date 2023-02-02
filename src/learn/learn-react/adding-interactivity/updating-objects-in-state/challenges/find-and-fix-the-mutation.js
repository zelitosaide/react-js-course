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
  return <Canvas />;
}

function Canvas() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  function handleColorClick(e) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorClick}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
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
      }}
    />
  );
}
