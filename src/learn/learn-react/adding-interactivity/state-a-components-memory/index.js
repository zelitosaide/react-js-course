import { useState } from "react";

import { sculptureList } from "../../../../data/data";

export default function Index() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <p>
        ({index + 1} of {sculptureList.length})
      </p>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>{sculpture.description}</p>
    </>
  );
}
