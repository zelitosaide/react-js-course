import { useState } from "react";

import { images } from "../../../../../data/data";

/**
 * Challenge 4 of 5: Clear an image while it’s loading
 *
 * When you press “Next”, the browser starts loading the next image. However,
 * because it’s displayed in the same <img> tag, by default you would still
 * see the previous image until the next one loads. This may be undesirable if
 * it’s important for the text to always match the image. Change it so that
 * the moment you press “Next”, the previous image immediately clears.
 */
export default function Index() {
  return <Gallery />;
}

function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let image = images[index];

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      <img
        src={image.src}
        alt={image.place}
      />
    </>
  );
}
