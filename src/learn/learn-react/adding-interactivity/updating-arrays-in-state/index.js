import { useState } from "react";

let nextId = 0;

export default function Index() {
  return <List />;
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
          artists.push({
            id: nextId++,
            name: name,
          });
        }}
      >
        Add
      </button>
    </>
  );
}
