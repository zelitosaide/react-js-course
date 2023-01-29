import { useState } from "react";
import { sculptureList } from "../../../../../data/data";

/**
 * Challenge 1 of 4: Complete the gallery
 *
 * When you press “Next” on the last sculpture, the code crashes. Fix
 * the logic to prevent the crash. You may do this by adding extra
 * logic to event handler or by disabling the button when the action
 * is not possible.
 *
 * After fixing the crash, add a “Previous” button that shows the
 * previous sculpture. It shouldn’t crash on the first sculpture.
 */
export default function Index() {
  return <Gallery />;
}

function Gallery() {
  const [index, setIndex] = useState(0);

  function handleNextClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleNextClick}>Next</button>
    </>
  );
}
