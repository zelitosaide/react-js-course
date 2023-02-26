import {
  useEffect,
  useRef,
  useState,
  experimental_useEffectEvent as useEffectEvent,
} from "react";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default function Index() {
  return (
    <>
      <Counter />
      <Form />
      <VideoApp />
      <Chat2 />
      <Chat3 />
      <Chat4 />
      <Chat5 />
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

const serverUrl = "https://localhost:1234";

function Chat3() {
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
      <ChatRoom2 roomId={roomId} />
    </div>
  );
}

function ChatRoom2({ roomId }) {
  useEffect(
    function () {
      const connection = createConnection3(serverUrl, roomId);
      connection.connect();
      return function () {
        connection.disconnect();
      };
    },
    [roomId]
  );
  return <h1>Welcome to the {roomId} room!</h1>;
}

function createConnection3(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
}

function showNotification(message, theme) {
  Toastify({
    text: message,
    duration: 2000,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    close: true,
    style: {
      background: theme === "dark" ? "black" : "white",
      color: theme === "dark" ? "white" : "black",
      // background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}

function Chat4() {
  const [roomId, setRoomId] = useState("general");
  const [isDark, setIsDark] = useState(false);

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
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={function (e) {
            setIsDark(e.target.checked);
          }}
        />
        Use dark theme
      </label>
      <hr />
      <ChatRoom4
        roomId={roomId}
        theme={isDark ? "dark" : "light"}
      />
    </div>
  );
}

function ChatRoom4({ roomId, theme }) {
  useEffect(
    function () {
      const connection = createConnection(serverUrl, roomId);
      connection.on("connected", function () {
        showNotification("Connected!", theme);
      });
      connection.connect();
      return function () {
        connection.disconnect();
      };
    },
    [roomId, theme]
  );

  return <h1>Welcome to the {roomId} room!</h1>;
}

function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  let connectedCallback;
  let timeout;
  return {
    connect() {
      timeout = setTimeout(function () {
        if (connectedCallback) {
          connectedCallback();
        }
      }, 200);
    },
    on(event, callback) {
      if (connectedCallback) {
        throw Error("Cannot add the handler twice.");
      }
      if (event !== "connected") {
        throw Error("Only 'connected' event is supported.");
      }
      connectedCallback = callback;
    },
    disconnect() {
      clearTimeout(timeout);
    },
  };
}

function Chat5() {
  const [roomId, setRoomId] = useState("general");
  const [isDark, setIsDark] = useState(false);

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
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={function (e) {
            setIsDark(e.target.checked);
          }}
        />
        Use dark theme
      </label>
      <hr />
      <ChatRoom5
        roomId={roomId}
        theme={isDark ? "dark" : "light"}
      />
    </div>
  );
}

function ChatRoom5({ roomId, theme }) {
  const onConnected = useEffectEvent(function () {
    showNotification("Connected!", theme);
  });

  // function onConnected() {
  //   showNotification("Connected!", theme);
  // }

  useEffect(
    function () {
      const connection = createConnection(serverUrl, roomId);
      connection.on("connected", function () {
        onConnected();
      });
      connection.connect();
      return function () {
        connection.disconnect();
      };
    },
    [roomId]
  );

  return <h1>Welcome to the {roomId} room!</h1>;
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
