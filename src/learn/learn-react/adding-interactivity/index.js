import { useState } from "react";
import { useImmer } from "use-immer";

import { sculptureList, artworks as initialList } from "../../../data/data";

export default function Index() {
  return (
    <>
      <RespondingToEvents />
      <Gallery />
      <Form />
      <BuggyCounter />
      <FixedCounter />
      <UpdatingObjectsInState />
      <UpdateObjectsInStateUsingImmer />
      <BucketList />
      <BucketListUsingImmer />
    </>
  );
}

function BucketListUsingImmer() {
  const [list, updateList] = useImmer(initialList);

  function handleToggle(artworkId, nextSeen) {
    updateList(function (draft) {
      const artwork = draft.find(function (a) {
        return a.id === artworkId;
      });
      artwork.seen = nextSeen;
    });
  }
}

function BucketList() {
  const [list, setList] = useState(initialList);

  function handleToggle(artworkId, nextSeen) {
    setList(
      list.map(function (artwork) {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
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
        artworks={list}
        onToggle={handleToggle}
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
                onChange={function (event) {
                  onToggle(artwork.id, event.target.checked);
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

function UpdateObjectsInStateUsingImmer() {
  const [person, updatePerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(event) {
    updatePerson(function (person) {
      person.name = event.target.value;
    });
  }

  function handleTitleChange(event) {
    updatePerson(function (person) {
      person.artwork.title = event.target.value;
    });
  }

  function handleCityChange(event) {
    updatePerson(function (person) {
      person.artwork.city = event.target.value;
    });
  }

  function handleImageChange(event) {
    updatePerson(function (person) {
      person.artwork.image = event.target.value;
    });
  }

  return (
    <>
      <label style={{ display: "block" }}>
        Name:{" "}
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label style={{ display: "block" }}>
        Title{" "}
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label style={{ display: "block" }}>
        City:{" "}
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label style={{ display: "block" }}>
        Image:{" "}
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i> by {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
        height={100}
        width={100}
      />
    </>
  );
}

function UpdatingObjectsInState() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(event) {
    setPerson({
      ...person,
      name: event.target.value,
    });
  }

  function handleTitleChange(event) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: event.target.value,
      },
    });
  }

  function handleCityChange(event) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: event.target.value,
      },
    });
  }

  function handleImageChange(event) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: event.target.value,
      },
    });
  }

  return (
    <>
      <label style={{ display: "block" }}>
        Name:{" "}
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label style={{ display: "block" }}>
        Title{" "}
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label style={{ display: "block" }}>
        City:{" "}
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label style={{ display: "block" }}>
        Image:{" "}
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i> by {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
        height={100}
        width={100}
      />
    </>
  );
}

function FixedCounter() {
  const [score, setScore] = useState(0);

  function increment() {
    console.log("FixedCounter", score);
    setScore(function (s) {
      return s + 1;
    });
    console.log("FixedCounter", score);
  }

  return (
    <>
      <button
        onClick={function () {
          increment();
        }}
      >
        +1
      </button>
      <button
        onClick={function () {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <h2>Score: {score}</h2>
    </>
  );
}

function BuggyCounter() {
  const [score, setScore] = useState(0);

  function increment() {
    console.log("BuggyCounter", score);
    setScore(score + 1);
    console.log("BuggyCounter", score);
  }

  return (
    <>
      <button
        onClick={function () {
          increment();
        }}
      >
        +1
      </button>
      <button
        onClick={function () {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <h2>Score: {score}</h2>
    </>
  );
}

function Form() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleSubmit(event) {
    event.preventDefault();
    setTimeout(function () {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To{" "}
        <select
          value={to}
          onChange={function (event) {
            setTo(event.target.value);
          }}
        >
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        style={{ display: "block" }}
        value={message}
        onChange={function (event) {
          setMessage(event.target.value);
        }}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button
        onClick={handleMoreClick}
        style={{ display: "block" }}
      >
        {showMore ? "Hide" : "Show"} details
      </button>

      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
        height={100}
        width={100}
      />
    </>
  );
}

function RespondingToEvents() {
  return (
    <Toolbar
      onPlayMovie={function () {
        alert("Playing!");
      }}
      onUploadImage={function () {
        alert("Uploading!");
      }}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
