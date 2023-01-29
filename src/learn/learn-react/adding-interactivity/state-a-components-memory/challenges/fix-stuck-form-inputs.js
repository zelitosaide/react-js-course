import { useState } from "react";

export default function Index() {}

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    console.log(e.target);
  }

  return (
    <form>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
    </form>
  );
}
