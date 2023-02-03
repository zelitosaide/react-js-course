import { useState } from "react";
import { useImmer } from "use-immer";

import {
  artists as initialArtists,
  shapes as initialShapes,
  counters as initialCounters,
  artworks as initialArtworks,
} from "../../../../data/data";

let nextId = 3;

export default function Index() {
  return (
    <>
      <List2 />
      <List3 />
      <List4 />
      <List5 />
      <ShapeEditor />
      <CounterList />
      <List6 />
      <List7 />
      <List8 />
      <List9 />
      <List />
    </>
  );
}

function List() {
  const [myArtworkList, updateMyArtworkList] = useImmer(initialArtworks);
  const [yourArtworkList, updateYourArtworkList] = useImmer(initialArtworks);

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <h2>Your list of art to see:</h2>
    </>
  );
}

function List9() {
  const [myArtworkList, setMyArtworkList] = useState(initialArtworks);
  const [yourArtworkList, setYourArtworkList] = useState(initialArtworks);

  function handleToggleMyArtworkList(artworkId, nextSeen) {
    setMyArtworkList(
      myArtworkList.map(function (artwork) {
        if (artwork.id === artworkId) {
          // Create a *new* object with changes
          return { ...artwork, seen: nextSeen };
        } else {
          // No changes
          return artwork;
        }
      })
    );
  }

  function handleToggleYourArtworkList(artworkId, nextSeen) {
    setYourArtworkList(
      yourArtworkList.map(function (artwork) {
        if (artwork.id === artworkId) {
          // Create a *new* object with changes
          return { ...artwork, seen: nextSeen };
        } else {
          // No changes
          return artwork;
        }
      })
    );
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myArtworkList}
        onToggle={handleToggleMyArtworkList}
      />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourArtworkList}
        onToggle={handleToggleYourArtworkList}
      />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(function (artwork) {
        return (
          <li key={artwork.id}>
            <label>
              <input
                type="checkbox"
                checked={artwork.seen}
                onChange={function (e) {
                  onToggle(artwork.id, e.target.checked);
                }}
              />
              {artwork.title}
            </label>
          </li>
        );
      })}
    </ul>
  );
}

function List8() {
  const [myArtworkList, setMyArtworkList] = useState(initialArtworks);
  const [yourArtworkList, setYourArtworkList] = useState(initialArtworks);

  function handleToggleMyList(artworkId, nextSeen) {
    const myNextArtworkList = [...myArtworkList];
    const artwork = myNextArtworkList.find(function (a) {
      return a.id === artworkId;
    });
    artwork.seen = nextSeen;
    setMyArtworkList(myNextArtworkList);
  }

  function handleToggleYourList(artworkId, nextSeen) {
    const yourNextArtworkList = [...yourArtworkList];
    const artwork = yourNextArtworkList.find(function (a) {
      return a.id === artworkId;
    });
    artwork.seen = nextSeen;
    setYourArtworkList(yourNextArtworkList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myArtworkList}
        onToggle={handleToggleMyList}
      />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourArtworkList}
        onToggle={handleToggleYourList}
      />
    </>
  );
}

function List7() {
  const [artists, setArtists] = useState(initialArtists);

  function handleClick() {
    const nextArtists = [...artists];
    nextArtists.reverse();
    setArtists(nextArtists);
  }

  return (
    <>
      <button onClick={handleClick}>Reverse</button>
      <ul>
        {artists.map(function (artist) {
          return <li key={artist.id}>{artist.name}</li>;
        })}
      </ul>
    </>
  );
}

function List6() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  function handleClick() {
    const insertAt = 1; // Could be an index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName("");
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={function (e) {
          setName(e.target.value);
        }}
      />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map(function (artist) {
          return <li key={artist.id}>{artist.name}</li>;
        })}
      </ul>
    </>
  );
}

function CounterList() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map(function (counter, i) {
      if (i === index) {
        // Increment the clicked counter
        return counter + 1;
      } else {
        // The rest haven't changed
        return counter;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <ul>
      {counters.map(function (counter, i) {
        return (
          <li key={i}>
            {counter}{" "}
            <button
              onClick={function () {
                handleIncrementClick(i);
              }}
            >
              +1
            </button>
          </li>
        );
      })}
    </ul>
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
    <div style={{ position: "relative", background: "pink", height: 400 }}>
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

function List5() {
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
