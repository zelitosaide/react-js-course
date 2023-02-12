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
  const message = state.message;
  const contact = contacts.find(function (c) {
    return c.id === state.selectedId;
  });

  return (
    <div style={{ clear: "both" }}>
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

function ContactList({ contacts, selectedId, dispatch }) {
  return (
    <section className="contact-list">
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {contacts.map(function (contact) {
          return (
            <li key={contact.id}>
              <button
                style={{ width: 100, padding: 10, marginRight: 10 }}
                onClick={function () {
                  dispatch({
                    type: "changed_selection",
                    contactId: contact.id,
                  });
                }}
              >
                {selectedId === contact.id ? (
                  <b>{contact.name}</b>
                ) : (
                  contact.name
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea
        style={{ height: 150 }}
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={function (e) {
          dispatch({
            type: "edited_message",
            message: e.target.value,
          });
        }}
      />
      <br />
      <button
        onClick={function () {
          alert(contact.email + " : " + message);
          // dispatch({
          //   type: "edited_message",
          //   message: "",
          // });
          dispatch({ type: "sent_message" });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
