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
}

function Background() {}
