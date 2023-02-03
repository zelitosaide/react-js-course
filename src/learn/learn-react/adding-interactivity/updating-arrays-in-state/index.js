import { useState } from "react";

export default function Index() {
  return <List />;
}

function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
    </>
  );
}
