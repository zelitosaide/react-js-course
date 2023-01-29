import { useState } from "react";

export default function Index() {
  return <Form />;
}

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <form>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
        name="firstName"
      />
      <input
        placeholder="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
      />
    </form>
  );
}
