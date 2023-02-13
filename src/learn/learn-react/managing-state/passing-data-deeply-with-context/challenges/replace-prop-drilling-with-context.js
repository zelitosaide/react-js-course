import { useContext, useState } from "react";

import { places } from "../../../../../data/data";
import { getImageUrl } from "../../../../../utils/utils";
import { ImageSizeContext } from "./context";

/**
 * Challenge 1 of 1: Replace prop drilling with context
 */
export default function Index() {
  return (
    <>
      <ReplacePropDrillingWithContext2 />
      <ReplacePropDrillingWithContext />
    </>
  );
}

function ReplacePropDrillingWithContext() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <ImageSizeContext.Provider value={imageSize}>
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
      <List />
    </ImageSizeContext.Provider>
  );
}

function List() {
  const listItems = places.map(function (place) {
    return (
      <li key={place.id}>
        <Place place={place} />
      </li>
    );
  });

  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>: {place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

function ReplacePropDrillingWithContext2() {
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
      <List2 imageSize={imageSize} />
    </>
  );
}

function List2({ imageSize }) {
  const listItems = places.map(function (place) {
    return (
      <li key={place.id}>
        <Place2
          place={place}
          imageSize={imageSize}
        />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}

function Place2({ place, imageSize }) {
  return (
    <>
      <PlaceImage2
        place={place}
        imageSize={imageSize}
      />
      <p>
        <b>{place.name}</b>: {place.description}
      </p>
    </>
  );
}

function PlaceImage2({ place, imageSize }) {
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
