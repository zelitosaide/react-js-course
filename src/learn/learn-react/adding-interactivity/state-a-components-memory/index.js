import { useState } from "react";

import { sculptureList } from "../../../../data/data";

export default function Index() {
  return <Page />;
}

function Page() {
  return (
    <div className="page">
      <Gallery />
      <Gallery />
    </div>
  );
}

function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <section>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <p>
        ({index + 1} of {sculptureList.length})
      </p>
      <p>
        <button onClick={handleMoreClick}>
          {showMore ? "Hide" : "Show"} details
        </button>
      </p>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </section>
  );
}
