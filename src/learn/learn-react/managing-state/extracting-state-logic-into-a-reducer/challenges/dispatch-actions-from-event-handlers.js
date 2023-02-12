import { useReducer } from "react";

import { initialState, messengerReducer } from "./messenger-reducer";

/**
 * Challenge 1 of 4: Dispatch actions from event handlers
 *
 * Currently, the event handlers in ContactList.js and Chat.js
 * have // TODO comments. This is why typing into the input
 * doesn’t work, and clicking on the buttons doesn’t change the
 * selected recipient.
 *
 * Replace these two // TODOs with the code to dispatch the
 * corresponding actions. To see the expected shape and the type
 * of the actions, check the reducer in messengerReducer.js. The
 * reducer is already written so you won’t need to change it. You
 * only need to dispatch the actions in ContactList.js and Chat.js.
 */
export default function Index() {
  return <Messenger />;
}

function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);

  return (
    <div>
      <ContactList />
      <Chat />
    </div>
  );
}

function ContactList({ contacts, selectedId, dispatch }) {}

function Chat() {}
