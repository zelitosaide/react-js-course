import { useState } from "react";

/**
 * Challenge 5 of 5: Fix misplaced state in the list
 *
 * In this list, each Contact has state that determines whether “Show email”
 * has been pressed for it. Press “Show email” for Alice, and then tick the
 * “Show in reverse order” checkbox. You will notice that it’s Taylor’s email
 * that is expanded now, but Alice’s—which has moved to the bottom—appears
 * collapsed.
 *
 * Fix it so that the expanded state is associated with each contact, regardless
 * of the chosen ordering.
 */
export default function Index() {
  return <ContactList />;
}

function ContactList() {
  const [reverse, setReverse] = useState(false);
}
