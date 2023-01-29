import { useState } from "react";

/**
 * Challenge 3 of 4: Fix a crash
 *
 * Here is a small form that is supposed to let the user leave some
 * feedback. When the feedback is submitted, it’s supposed to display
 * a thank-you message. However, it crashes with an error message
 * saying “Rendered fewer hooks than expected”. Can you spot the mistake and fix it?
 */

export default function Index() {
  return <FeedbackForm />;
}

function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  if (isSent) {
    return <h1>Thank you!</h1>;
  }

  return (
    <form
      onSubmit={function (e) {
        e.preventDefault();
        alert(`Sending: ${message}`);
        setIsSent(true);
      }}
    >
      <textarea
        placeholder="Message"
        value={message}
        onChange={function (e) {
          setMessage(e.target.value);
        }}
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}
