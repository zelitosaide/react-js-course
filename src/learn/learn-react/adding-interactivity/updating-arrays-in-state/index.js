import { useState } from "react";

let nextId = 0;

export default function Index() {
  return (
    <>
      <List2 />
      <List3 />
    </>
  );
}

function List() {
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
