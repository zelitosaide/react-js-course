import { sculptureList } from "../../../../data/data";

export default function Index() {
  let index = 0;

  function handleClick() {
    index = index + 1;
  }

  return (
    <>
      <button onClick={handleClick}>Next</button>
    </>
  );
}
