import { useRef, useState } from "react";

export default function Index() {
  return (
    <>
      <Counter />
      <Form />
      <VideoApp />
    </>
  );
}

function Counter() {
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
    console.log(ref);
  }

  return <button onClick={handleClick}>Click</button>;
}

function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}

function VideoApp() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <button
        onClick={function () {
          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </>
  );
}

function VideoPlayer() {}
