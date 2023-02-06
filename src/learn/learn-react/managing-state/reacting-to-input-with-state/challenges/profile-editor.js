import { useState } from "react";

export default function Index() {
  return <ProfileEditor />;
}

function ProfileEditor() {
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");
  const [isEditing, setIsEditing] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsEditing(!isEditing);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        First Name:{" "}
        {isEditing ? (
          <input
            value={firstName}
            onChange={function (e) {
              setFirstName(e.target.value);
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last Name:{" "}
        {isEditing ? (
          <input
            value={lastName}
            onChange={function (e) {
              setLastName(e.target.value);
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">
        {isEditing ? "Save Profile" : "Edit Profile"}
      </button>
      <p>
        Hello, {firstName} {lastName}!
      </p>
    </form>
  );
}
