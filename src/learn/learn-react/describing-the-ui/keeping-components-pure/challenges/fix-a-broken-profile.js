/**
 * Fix a broken profile
 *
 * Two Profile components are rendered side by side with different
 * data. Press “Collapse” on the first profile, and then “Expand”
 * it. You’ll notice that both profiles now show the same person. This is a bug.
 *
 * Find the cause of the bug and fix it.
 */

import { useState } from "react";
import { getImageUrl } from "../../../../../utils/services";

let currentPerson;

export default function Index() {
  return (
    <>
      <Profile
        person={{
          imageId: "lrWQx8l",
          name: "Subrahmanyan Chandrasekhar",
        }}
      />
      <Profile
        person={{
          imageId: "MK3eW3A",
          name: "Creola Katherine Johnson",
        }}
      />
    </>
  );
}

function Profile({ person }) {
  currentPerson = person;

  return (
    <Panel>
      <Header />
      <Avatar />
    </Panel>
  );
}

function Header() {
  console.log("Header");
  return <h1>{currentPerson.name}</h1>;
}

function Avatar() {
  return (
    <img
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
      style={{ margin: 5, borderRadius: "50%" }}
    />
  );
}

function Panel({ children }) {
  const [open, setOpen] = useState(true);

  return (
    <section className="panel">
      <button
        onClick={function () {
          setOpen(!open);
        }}
      >
        {open ? "Collapse" : "Expand"}
      </button>
      {open && children}
    </section>
  );
}
