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
    <div>
      <button
        onClick={function () {
          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
}

function VideoPlayer({ isPlaying, src }) {
  const ref = useRef(null);

  return (
    <video
      style={{ width: 250, display: "block" }}
      ref={ref}
      src={src}
      loop
      playsInline
    />
  );
}
