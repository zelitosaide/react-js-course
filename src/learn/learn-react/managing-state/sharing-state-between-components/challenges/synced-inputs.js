import { useState } from "react";

/**
 * Challenge 1 of 2: Synced inputs
 *
 * These two inputs are independent. Make them stay in sync: editing
 * one input should update the other input with the same text, and vice versa.
 */
export default function Index() {
  return <SyncedInputs />;
}

function SyncedInputs() {
  return (
    <>
      <Input label="First input" />
      <Input label="Second input" />
    </>
  );
}

function Input({ label }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label style={{ display: "block" }}>
      {label}{" "}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}
