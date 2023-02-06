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
        Last Name: <b>{lastName}</b>
        <input
          value={lastName}
          onChange={function (e) {
            setLastName(e.target.value);
          }}
        />
      </label>
      <button type="submit">
        {isEditing ? "Save Profile" : "Edit Profile"}
      </button>
    </form>
  );
}
