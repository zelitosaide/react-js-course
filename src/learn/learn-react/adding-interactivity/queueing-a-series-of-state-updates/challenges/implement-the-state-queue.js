/**
 * Challenge 2 of 2: Implement the state queue yourself
 */

import { getFinalState, increment } from "../../../../../utils/utils";

export default function Index() {
  return (
    <>
      <TestCase
        baseState={0}
        queue={[1, 1, 1]}
        expected={1}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[increment, increment, increment]}
        expected={3}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[5, increment]}
        expected={6}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[5, increment, 42]}
        expected={42}
      />
    </>
  );
}

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
      <p>
        Your result: <b>{actual}</b> (
        {actual === expected ? "correct" : "wrong"})
      </p>
    </>
  );
}
