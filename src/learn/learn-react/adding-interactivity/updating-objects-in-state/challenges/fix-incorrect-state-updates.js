import { useState } from "react";

/**
 * Challenge 1 of 3: Fix incorrect state updates
 *
 * This form has a few bugs. Click the button that increases the score
 * a few times. Notice that it does not increase. Then edit the first
 * name, and notice that the score has suddenly “caught up” with your
 * changes. Finally, edit the last name, and notice that the score has
 * disappeared completely.
 *
 * Your task is to fix all of these bugs. As you fix them, explain why
 * each of them happens.
 */
export default function Index() {}

function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick() {}

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
    </>
  );
}
