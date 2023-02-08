import { useState } from "react";

import { letters as initialLetters } from "../../../../../data/data";

/**
 * Challenge 4 of 4: Implement multiple selection
 */
export default function Index() {
  return (
    <>
      <MailClient2 />
      <MailClient />
    </>
  );
}

function MailClient() {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const selectedCount = selectedIds.size;

  return (
    <>
      <h2>Inbox</h2>
    </>
  );
}

function MailClient2() {
  const [selectedIds, setSelectedIds] = useState([]);

  // TODO: allow multiple selection
  const selectedCount = selectedIds.length;

  function handleToggle(toggledId) {
    // Was it previously selected?
    if (selectedIds.includes(toggledId)) {
      // Then remove this ID from the array.
      setSelectedIds(
        selectedIds.filter(function (id) {
          return id !== toggledId;
        })
      );
    } else {
      // Otherwise, add this ID to the array
      setSelectedIds([...selectedIds, toggledId]);
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {initialLetters.map(function (letter) {
          return (
            <Letter2
              key={letter.id}
              letter={letter}
              isSelected={
                // TODO: allow multiple selection
                selectedIds.includes(letter.id)
              }
              onToggle={handleToggle}
            />
          );
        })}
      </ul>
      <hr />
      {selectedCount > 0 && (
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      )}
    </>
  );
}

function Letter2({ letter, isSelected, onToggle }) {
  return (
    <li className={isSelected ? "selected" : ""}>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={function () {
            onToggle(letter.id);
          }}
        />{" "}
        {letter.subject}
      </label>
    </li>
  );
}
