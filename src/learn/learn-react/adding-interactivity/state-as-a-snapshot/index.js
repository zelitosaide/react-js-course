import { useState } from "react";

export default function Index() {}

function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <form>
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

function sendMessage() {}
