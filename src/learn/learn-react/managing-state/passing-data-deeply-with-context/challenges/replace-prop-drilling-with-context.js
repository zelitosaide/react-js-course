import { useState } from "react";

/**
 * Challenge 1 of 1: Replace prop drilling with context
 */
export default function Index() {
  return <ReplacePropDrillingWithContext />;
}

function ReplacePropDrillingWithContext() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
}
