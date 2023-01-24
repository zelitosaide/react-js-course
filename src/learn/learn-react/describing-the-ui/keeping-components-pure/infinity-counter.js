import { useState } from "react";
import { useTime } from "../../../../utils/services";

export default function Counter() {
  const time = useTime();
  const [count, setCount] = useState([]);
  return <Imcrement count={count} />;
}

function Imcrement({ count }) {
  count.push("A");
  return <h2>{count.length}</h2>;
}
