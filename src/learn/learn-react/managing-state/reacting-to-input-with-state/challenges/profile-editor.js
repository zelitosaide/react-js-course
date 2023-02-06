import { useState } from "react";

export default function Index() {
  return <ProfileEditor />;
}

function ProfileEditor() {
  const [firstName, setFirstName] = useState("Jane");

  return (
    <form>
      <label>
        First Name: <b>{firstName}</b>{" "}
        <input
          value={firstName}
          onChange={function (e) {
            setFirstName(e.target.value);
          }}
        />
      </label>
    </form>
  );
}
