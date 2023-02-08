import { useState } from "react";

import { letters as initialLetters } from "../../../../../data/data";

/**
 * Challenge 4 of 4: Implement multiple selection
 */
export default function Index() {
  return <MailClient />;
}

function MailClient() {
  const [selectedId, setSelectedId] = useState(null);

  // TODO: allow multiple selection
  const selectedCount = 1;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    setSelectedId(toggledId);
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

function Letter({ letter, isSelected, onToggle }) {}
