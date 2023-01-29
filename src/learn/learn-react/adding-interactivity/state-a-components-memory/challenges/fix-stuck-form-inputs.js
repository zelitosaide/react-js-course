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
      <p>
        <input
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
          name="firstName"
        />
      </p>
      <p>
        <input
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </p>
      <h1>
        Hi, {firstName} {lastName}
      </h1>
    </form>
  );
}
