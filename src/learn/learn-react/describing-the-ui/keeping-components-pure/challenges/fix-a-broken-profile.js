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

function Profile({ person }) {
  return <Panel></Panel>;
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
