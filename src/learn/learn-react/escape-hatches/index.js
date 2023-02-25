import { useRef } from "react";

export default function Index() {
  return <Counter />;
}

function Counter() {
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
  }

  return <button onClick={handleClick}>Click</button>;
}
