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
export default function Index() {
  return <Scoreboard />;
}

function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick() {
    player.score++;
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({ lastName: e.target.value });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First Name:{" "}
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last Name:{" "}
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
