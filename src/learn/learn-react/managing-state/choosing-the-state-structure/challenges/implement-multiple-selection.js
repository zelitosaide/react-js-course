import { useState } from "react";

import { letters as initialLetters } from "../../../../../data/data";

/**
 * Challenge 4 of 4: Implement multiple selection
 */
export default function Index() {
  return <MailClient />;
}

function MailClient() {
  const [selectedIds, setSelectedIds] = useState([]);

  // TODO: allow multiple selection
  const selectedCount = 1;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    if (selectedIds.includes(toggledId) > 0) {
      setSelectedIds(
        selectedIds.filter(function (id) {
          return id !== toggledId;
        })
      );
    } else {
      setSelectedIds([...selectedIds, toggledId]);
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {initialLetters.map(function (letter) {
          return (
            <Letter
              key={letter.id}
              letter={letter}
              isSelected={
                // TODO: allow multiple selection
                letter.id === selectedId
              }
              onToggle={handleToggle}
            />
          );
        })}
      </ul>
      <hr />
      <p>
        <b>You selected {selectedCount} letters</b>
      </p>
    </>
  );
}

function Letter({ letter, isSelected, onToggle }) {
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
