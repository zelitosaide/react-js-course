import { useState } from "react";
import { useImmer } from "use-immer";

/**
 * Challenge 3 of 3: Update an object with Immer
 *
 * This is the same buggy example as in the previous challenge. This time,
 * fix the mutation by using Immer. For your convenience, useImmer is
 * already imported, so you need to change the shape state variable to use it.
 */
const initialPosition = {
  x: 0,
  y: 0,
};

export default function Index() {
  return <Canvas />;
}

function Canvas() {
  const [shape, updateShape] = useImmer({
    color: "orange",
    position: initialPosition,
  });

  function handleColorChange(e) {
    updateShape(function (draft) {
      draft.color = e.target.value;
    });
  }

  function handleMove(dx, dy) {
    updateShape(function (draft) {
      draft.position.x += dx;
      draft.position.y += dy;
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}

function Box({ children, color, position, onMove }) {
  const [lastCoordinates, setLastCoordinates] = useState(null);

  function handlePointerDown(e) {
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
      onPointerDown={handlePointerDown}
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
    />
  );
}
