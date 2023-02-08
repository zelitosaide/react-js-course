import { useState } from "react";

import { useTime } from "../../../../../utils/utils";

/**
 * Challenge 1 of 4: Fix a component that’s not updating
 *
 * This Clock component receives two props: color and time. When you
 * select a different color in the select box, the Clock component
 * receives a different color prop from its parent component. However,
 * for some reason, the displayed color doesn’t update. Why? Fix the problem.
 */
export default function Index() {
  const time = useTime();
  const [color, setColor] = useState("lightcoral");

  return (
    <Clock
      time={time.toLocaleTimeString()}
      color={color}
    />
  );
}

function Clock(props) {
  const color = props.color;

  return <h1 style={{ color: color }}>{props.time}</h1>;
}
