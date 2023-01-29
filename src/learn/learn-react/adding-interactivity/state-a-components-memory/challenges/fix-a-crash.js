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

  return (
    <form
      onSubmit={function (e) {
        e.preventDefault();
      }}
    >
      <textarea
        value={message}
        onChange={function (e) {
          setMessage(e.target.value);
        }}
      />
    </form>
  );
}
