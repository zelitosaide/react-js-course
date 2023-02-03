import { useState } from "react";

import {
  artists as initialArtists,
  shapes as initialShapes,
} from "../../../../data/data";

let nextId = 0;

export default function Index() {
  return (
    <>
      <List2 />
      <List3 />
      <List4 />
      <List />
      <ShapeEditor />
    </>
  );
}

function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    const nextShapes = shapes.map(function (shape) {
      if (shape.type === "circle") {
        // Return a new circle 50px below
        return { ...shape, y: shape.y + 50 };
      } else {
        // No change
        return shape;
      }
    });
    // Re-render with the new array
    setShapes(nextShapes);
  }

  return (
    <div style={{ position: "relative", background: "pink" }}>
      <button onClick={handleClick}>Move circles down!</button>
      {shapes.map(function (shape) {
        return (
          <div
            key={shape.id}
            style={{
              background: "purple",
              position: "absolute",
              left: shape.x,
              top: shape.y,
              width: 20,
              height: 20,
              borderRadius: shape.type === "circle" ? "50%" : "",
            }}
          />
        );
      })}
    </div>
  );
}

function List() {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(function (artist) {
          return (
            <li key={artist.id}>
              {artist.name}{" "}
              <button
                onClick={function () {
                  setArtists(
                    artists.filter(function (a) {
                      return a.id !== artist.id;
                    })
                  );
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function List4() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={function (e) {
          setName(e.target.value);
        }}
      />
      <button
        onClick={function () {
          setName("");
          setArtists([{ id: nextId++, name: name }, ...artists]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map(function (artist) {
          return <li key={artist.id}>{artist.name}</li>;
        })}
      </ul>
    </>
  );
}

function List3() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={function (e) {
          setName(e.target.value);
        }}
      />
      <button
        onClick={function () {
          setName("");
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map(function (artist) {
          return <li key={artist.id}>{artist.name}</li>;
        })}
      </ul>
    </>
  );
}

function List2() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={function (e) {
          setName(e.target.value);
        }}
      />
      <button
        onClick={function () {
          setName("");
          artists.push({
            id: nextId++,
            name: name,
          });
        }}
      >
        Add
      </button>
      <ul>
        {artists.map(function (artist) {
          return <li key={artist.id}>{artist.name}</li>;
        })}
      </ul>
    </>
  );
}
