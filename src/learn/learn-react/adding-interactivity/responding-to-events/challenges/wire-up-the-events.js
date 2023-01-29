import { useState } from "react";

export default function Index() {
  const [clicks, setClicks] = useState(0);

  function handleClickOutside() {
    setClicks(function (c) {
      return c + 1;
    });
  }

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      onClick={handleClickOutside}
    ></div>
  );
}
