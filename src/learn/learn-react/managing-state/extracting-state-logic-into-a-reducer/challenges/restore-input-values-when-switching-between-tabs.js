import { useReducer } from "react";

import { contactsV2 as contacts } from "../../../../../data/data";
import { initialState, messengerReducer } from "./messenger-reducer-v2";

/**
 * Challenge 3 of 4: Restore input values when switching between tabs
 *
 * In this example, switching between different recipients always clears the text input:
 *
 * case 'changed_selection': {
 *  return {
 *    ...state,
 *    selectedId: action.contactId,
 *    message: '' // Clears the input
 *  };
 *
 * This is because you don’t want to share a single message draft between several
 * recipients. But it would be better if your app “remembered” a draft for each contact
 * separately, restoring them when you switch contacts.
 *
 * Your task is to change the way the state is structured so that you remember a
 * separate message draft per contact. You would need to make a few changes to the reducer,
 * the initial state, and the components.
 */
export default function Index() {
  return <Messenger />;
}

function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message[state.selectedId];
  const contact = contacts.find(function (c) {
    return c.id === state.selectedId;
  });

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        contact={contact}
        message={message}
        dispatch={dispatch}
      />
    </div>
  );
}

function ContactList({ contacts, selectedId, dispatch }) {}

function Chat({ contact, message, dispatch }) {}
