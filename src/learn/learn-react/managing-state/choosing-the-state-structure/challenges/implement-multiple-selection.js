import { useState } from "react";

import { letters as initialLetters } from "../../../../../data/data";

/**
 * Challenge 4 of 4: Implement multiple selection
 */
export default function Index() {
  return <MailClient />;
}

function MailClient() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <h2>Inbox</h2>
    </>
  );
}
