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

function Box({ children, color, position, onMove }) {}

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
