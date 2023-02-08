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
}
