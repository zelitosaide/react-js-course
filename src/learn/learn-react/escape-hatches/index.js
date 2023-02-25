import { useEffect, useRef, useState } from "react";

export default function Index() {
  return (
    <>
      <Counter />
      <Form />
      <VideoApp />
      <Chat2 />
      <Chat />
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

  useEffect(
    function () {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    },
    [isPlaying]
  );

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

function Chat2() {
  useEffect(function () {
    const connection = createConnection2();
    connection.connect();
    return function () {
      connection.disconnect();
    };
  }, []);

  return <h1>Welcome to the chat!</h1>;
}

function createConnection2() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log("✅ Connecting...");
    },
    disconnect() {
      console.log("❌ Disconnected.");
    },
  };
}

function Chat() {
  const [roomId, setRoomId] = useState("general");

  return (
    <div>
      <label>
        Choose the chat room:{" "}
        <select
          value={roomId}
          onChange={function (e) {
            setRoomId(e.target.value);
          }}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </div>
  );
}

function ChatRoom({ roomId }) {
  return <h1>Welcome to the {roomId} room!</h1>;
}
