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

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={() => {}}
      />
      <hr />
      <EditContact />
    </div>
  );
}

function ContactList({ contacts, selectedId, onSelect }) {}

function EditContact() {}
