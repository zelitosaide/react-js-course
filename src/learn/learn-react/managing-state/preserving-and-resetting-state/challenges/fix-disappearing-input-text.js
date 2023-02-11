import { useState } from "react";

/**
 * Challenge 1 of 5: Fix disappearing input text
 *
 * This example shows a message when you press the button. However,
 * pressing the button also accidentally resets the input. Why does
 * this happen? Fix it so that pressing the button does not reset the input text.
 */
export default function Index() {
  return <FixDisappearingInputText />;
}

function FixDisappearingInputText() {
  const [showHint, setShowHint] = useState(false);

  if (showHint) {
    return (
      <div style={{ clear: "both" }}>
        <p>
          <i>Your favorite city?</i>
        </p>
        <Form key="form" />
        <button
          onClick={function () {
            setShowHint(false);
          }}
        >
          Hide hint
        </button>
      </div>
    );
  }

  return (
    <div style={{ clear: "both" }}>
      <Form key="form" />
      <button
        onClick={function () {
          setShowHint(true);
        }}
      >
        Show hint
      </button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState("");

  return (
    <textarea
      style={{ display: "block" }}
      value={text}
      onChange={function (e) {
        setText(e.target.value);
      }}
    />
  );
}
