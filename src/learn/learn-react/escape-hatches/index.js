import { useRef } from "react";

export default function Index() {
  return (
    <>
      <Counter />
      <Form />
    </>
  );
}

function Counter() {
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
    console.log(ref);
  }

  return <button onClick={handleClick}>Click</button>;
}

function Form() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} />
      <button>Focus the input</button>
    </>
  );
}
