import { useState } from "react";

export default function Index() {
  return (
    <>
      <Form2 />
      <Counter2 />
      <Counter3 />
      <Counter />
      <Form />
    </>
  );
}

function Form() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(function () {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{" "}
        <select
          value={to}
          onChange={function (e) {
            setTo(e.target.value);
          }}
        >
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        value={message}
        placeholder="Message"
        onChange={function (e) {
          setMessage(e.target.value);
        }}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={function () {
          setNumber(number + 5);
          setTimeout(function () {
            alert(number);
          }, 1000);
        }}
      >
        +5
      </button>
    </>
  );
}

function Counter3() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={function () {
          setNumber(number + 5);
          alert(number);
        }}
      >
        +5
      </button>
    </>
  );
}

function Counter2() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={function () {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </>
  );
}

function Form2() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  if (isSent) {
    return <h1>Your message is on its way!</h1>;
  }

  return (
    <form
      onSubmit={function (e) {
        e.preventDefault();
        setIsSent(true);
        sendMessage(message);
      }}
    >
      <textarea
        value={message}
        onChange={function (e) {
          setMessage(e.target.value);
        }}
        placeholder="Message"
      />
      <button type="submit">Send</button>
    </form>
  );
}

function sendMessage(message) {}
