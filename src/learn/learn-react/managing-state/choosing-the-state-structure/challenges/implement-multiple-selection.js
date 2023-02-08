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

  function handleToggle() {}

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
    </>
  );
}

function Letter({ letter, isSelected, onToggle }) {}
