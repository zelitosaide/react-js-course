import { useState } from "react";

export default function Index() {
  return <Form />;
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
