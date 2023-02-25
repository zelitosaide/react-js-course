import { useRef } from "react";

export default function Index() {
  return <Counter />;
}

function Counter() {
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert(`You clicked ${ref.current} times!`);
    console.log(ref);
  }

  return <button onClick={handleClick}>Click</button>;
}
