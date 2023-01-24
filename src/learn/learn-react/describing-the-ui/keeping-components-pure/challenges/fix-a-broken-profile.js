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
  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  );
}

function Header({ person }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }) {
  return (
    <img
      src={getImageUrl(person)}
      alt={person.name}
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
