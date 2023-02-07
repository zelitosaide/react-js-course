import { useState } from "react";

export default function Index() {
  return (
    <>
      <MovingDot />
      <FeedbackForm2 />
      <FeedbackForm />
      <Form />
    </>
  );
}

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + " " + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + " " + e.target.value);
  }

  return (
    <>
      <h2>Let's check you in</h2>
      <label>
        First Name:{" "}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last Name:{" "}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

function FeedbackForm() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");

  const isSending = status === "sending";
  const isSent = status === "sent";

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    await sendMessage(text);
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at the Prancing Pony?</p>
      <textarea
        value={text}
        disabled={isSending}
        onChange={function (e) {
          setText(e.target.value);
        }}
      />
      <br />
      <button
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Loading...</p>}
    </form>
  );
}

function FeedbackForm2() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  }

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        value={text}
        disabled={isSending}
        onChange={function (e) {
          setText(e.target.value);
        }}
      />
      <br />
      <button
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

function sendMessage(text) {
  return new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });
}

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={function (e) {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "80vw",
        height: "50vh",
        backgroundColor: "lightblue",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          width: 20,
          height: 20,
          top: -10,
          left: -10,
          transform: `translate(${position.x}px, ${position.y}px)`,
          borderRadius: "50%",
        }}
      />
    </div>
  );
}
