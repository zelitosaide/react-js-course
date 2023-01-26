import { useState } from "react";
import { sculptureList } from "../../../data/data";

export default function Index() {
  return (
    <>
      <RespondingToEvents />
      <Gallery />
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
        ></select>
      </label>
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
