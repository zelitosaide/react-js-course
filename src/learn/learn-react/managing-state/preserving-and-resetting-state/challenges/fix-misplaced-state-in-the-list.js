import { useState } from "react";

import { contactsV2 } from "../../../../../data/data";

/**
 * Challenge 5 of 5: Fix misplaced state in the list
 *
 * In this list, each Contact has state that determines whether “Show email”
 * has been pressed for it. Press “Show email” for Alice, and then tick the
 * “Show in reverse order” checkbox. You will notice that it’s Taylor’s email
 * that is expanded now, but Alice’s—which has moved to the bottom—appears
 * collapsed.
 *
 * Fix it so that the expanded state is associated with each contact, regardless
 * of the chosen ordering.
 */
export default function Index() {
  return <ContactList />;
}

function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contactsV2];

  return (
    <>
      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          value={reverse}
          onChange={function (e) {
            setReverse(e.target.checked);
          }}
        />{" "}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map(function (contact, i) {
          return (
            <li key={i}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

function Contact({ contact }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <p>
        <b>{contact.name}</b>
      </p>
    </>
  );
}
