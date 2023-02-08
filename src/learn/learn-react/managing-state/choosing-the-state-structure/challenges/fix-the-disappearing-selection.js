/**
 * Challenge 3 of 4: Fix the disappearing selection
 *
 * There is a list of letters in state. When you hover or focus a
 * particular letter, it gets highlighted. The currently highlighted
 * letter is stored in the highlightedLetter state variable. You can
 * “star” and “unstar” individual letters, which updates the letters
 * array in state.
 *
 * This code works, but there is a minor UI glitch. When you press “Star”
 * or “Unstar”, the highlighting disappears for a moment. However, it
 * reappears as soon as you move your pointer or switch to another letter
 * with keyboard. Why is this happening? Fix it so that the highlighting
 * doesn’t disappear after the button click.
 */
import { useState } from "react";

import { letters as initialLetters } from "../../../../../data/data";

export default function Index() {
  return <MailClient />;
}

function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedLetter, setHighlightedLetter] = useState(null);

  function handleHover(letter) {
    setHighlightedLetter(letter);
  }

  function handleToggleStar(starred) {
    setLetters(
      letters.map(function (letter) {
        if (letter.id === starred.id) {
          return {
            ...starred,
            isStarred: !starred.isStarred,
          };
        } else {
          return letter;
        }
      })
    );
  }

  return (
    <>
      <h2>Inboxs</h2>
      <ul>
        {letters.map(function (letter) {
          return (
            <Letter
              key={letter.id}
              letter={letter}
              isHighlighted={letter === highlightedLetter}
              onHover={handleHover}
              onToggleStar={handleToggleStar}
            />
          );
        })}
      </ul>
    </>
  );
}

function Letter({ letter, isHighlighted, onHover, onToggleStar }) {
  return (
    <li
      className={isHighlighted ? "highlighted" : ""}
      onPointerMove={function () {
        onHover(letter);
      }}
    >
      <button
        onClick={function () {
          onToggleStar(letter);
        }}
      >
        {letter.isStarred ? "Unstar" : "Star"}
      </button>{" "}
      {letter.subject}
    </li>
  );
}
