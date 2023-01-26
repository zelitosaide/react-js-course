import { useState } from "react";

import { sculptureList } from "../../../data/data";

export default function Index() {
  return (
    <>
      <RespondingToEvents />
      <Gallery />
      <Form />
      <BuggyCounter />
    </>
  );
}

function FixedCounter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(function (s) {
      return s + 1;
    });
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
    setScore(score + 1);
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
