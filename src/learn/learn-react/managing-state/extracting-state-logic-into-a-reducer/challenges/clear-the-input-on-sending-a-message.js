import { useReducer } from "react";

import { contactsV2 as contacts } from "../../../../../data/data";
import { initialState, messengerReducer } from "./messenger-reducer";

/**
 * Challenge 2 of 4: Clear the input on sending a message
 *
 * Currently, pressing “Send” doesn’t do anything. Add an event handler
 * to the “Send” button that will:
 *
 * 1. Show an alert with the recipient’s email and the message.
 * 2. Clear the message input.
 */
export default function Index() {
  return <Messenger />;
}

function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat />
    </div>
  );
}

function ContactList({ contacts, selectedId, dispatch }) {}

function Chat({}) {}
