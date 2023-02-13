import { useState } from "react";
import { places } from "../../../../../data/data";

/**
 * Challenge 1 of 1: Replace prop drilling with context
 */
export default function Index() {
  return <ReplacePropDrillingWithContext />;
}

function ReplacePropDrillingWithContext() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <>
      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          value={isLarge}
          onChange={function (e) {
            setIsLarge(e.target.checked);
          }}
        />{" "}
        Use large images
      </label>
      <hr />
      <List imageSize={imageSize} />
    </>
  );
}

function List({ imageSize }) {
  const listItems = places.map(function (place) {
    return (
      <li key={place.id}>
        <Place
          place={place}
          imageSize={imageSize}
        />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}

function Place({ place, imageSize }) {
  return (
    <>
      <PlaceImage
        place={place}
        imageSize={imageSize}
      />
      <p>
        <b>{place.name}</b>: {place.description}
      </p>
    </>
  );
}

function PlaceImage({ place, imageSize }) {}
