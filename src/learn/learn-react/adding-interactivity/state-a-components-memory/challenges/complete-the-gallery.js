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
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <p>
        ({index + 1} of {sculptureList.length})
      </p>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}
