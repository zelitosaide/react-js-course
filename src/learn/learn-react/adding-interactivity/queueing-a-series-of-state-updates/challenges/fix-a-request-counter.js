/**
 * Challenge 1 of 2: Fix a request counter
 *
 * You’re working on an art marketplace app that lets the user submit multiple orders
 * for an art item at the same time. Each time the user presses the “Buy” button, the
 * “Pending” counter should increase by one. After three seconds, the “Pending” counter
 * should decrease, and the “Completed” counter should increase.
 *
 * However, the “Pending” counter does not behave as intended. When you press “Buy”, it
 * decreases to -1 (which should not be possible!). And if you click fast twice, both
 * counters seem to behave unpredictably.
 */
import { useState } from "react";

export default function Index() {
  return <RequestTracker />;
}

function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    // setPending(function (p) {
    //   return p + 1;
    // });
    // await delay(3000);
    // setPending(function (p) {
    //   return p - 1;
    // });
    // setCompleted(function (c) {
    //   return c + 1;
    // });

    setPending(pending + 1);
    await delay(3000);
    setPending(pending - 1);
    setCompleted(completed + 1);
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
}
