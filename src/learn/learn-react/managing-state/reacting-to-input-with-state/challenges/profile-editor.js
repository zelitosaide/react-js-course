import { useState } from "react";

export default function Index() {
  return <ProfileEditor />;
}

function ProfileEditor() {
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <form>
      <label>
        First Name: <b>{firstName}</b>
        <input
          value={firstName}
          onChange={function (e) {
            setFirstName(e.target.value);
          }}
        />
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
