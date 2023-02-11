import { useState } from "react";

import { contactsV2 as initialContacts } from "../../../../../data/data";

/**
 * Challenge 3 of 5: Reset a detail form
 *
 * This is an editable contact list. You can edit the selected contact’s
 * details and then either press “Save” to update it, or “Reset” to undo your changes.
 *
 * When you select a different contact (for example, Alice), the state updates but
 * the form keeps showing the previous contact’s details. Fix it so that the form gets
 * reset when the selected contact changes.
 */
export default function Index() {
  return <ContactManager />;
}

function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);

  const selectedContact = contacts.find(function (c) {
    return c.id === selectedId;
  });

  function handleSave(updatedData) {
    const nextContacts = contacts.map(function (c) {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={function (id) {
          setSelectedId(id);
        }}
      />
      <hr />
      <EditContact
        initialData={selectedContact}
        onSave={handleSave}
        key={selectedId}
      />
    </div>
  );
}

function ContactList({ contacts, selectedId, onSelect }) {
  return (
    <section>
      <ul>
        {contacts.map(function (contact) {
          return (
            <li key={contact.id}>
              <button
                onClick={function () {
                  onSelect(contact.id);
                }}
              >
                {contact.id === selectedId ? (
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

function EditContact({ initialData, onSave }) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);

  return (
    <section>
      <label style={{ display: "block" }}>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={function (e) {
            setName(e.target.value);
          }}
        />
      </label>
      <label style={{ display: "block" }}>
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={function (e) {
            setEmail(e.target.value);
          }}
        />
      </label>
      <button
        onClick={function () {
          const updatedData = {
            id: initialData.id,
            name: name,
            email: email,
          };
          onSave(updatedData);
        }}
      >
        Save
      </button>
      <button
        onClick={function () {
          setName(initialData.name);
          setEmail(initialData.email);
        }}
      >
        Reset
      </button>
    </section>
  );
}
