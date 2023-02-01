/**
 * Challenge 2 of 2: Implement the state queue yourself
 */

import { getFinalState } from "../../../../../utils/utils";

export default function Index() {}

function TestCase({ baseState, queue, expected }) {
  const actual = getFinalState(baseState, queue);

  return (
    <>
      <p>
        Base state: <b>{baseState}</b>
      </p>
      <p>
        Queue: <b>[{queue.join(", ")}]</b>
      </p>
      <p>
        Expected result: <b>{expected}</b>
      </p>
    </>
  );
}
