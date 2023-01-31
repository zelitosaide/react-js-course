import { useState } from "react";

export default function Index() {
  return (
    <>
      <Form />
      <Counter />
    </>
  );
}

function Counter() {
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

function Form() {
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
