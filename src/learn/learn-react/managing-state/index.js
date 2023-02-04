import { useState } from "react";

import { contacts } from "../../../data/data";

export default function Index() {
  return (
    <>
      <Form2 />
      <Form3 />
      <Form />
      <Accordion />
      <Messager />
    </>
  );
}

function Messager() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={function (contact) {
          setTo(contact);
        }}
      />
      <Chat contact={to} />
    </div>
  );
}

function Chat({ contact }) {
  const [text, setText] = useState("");

  return (
    <section>
      <textarea
        placeholder={"Chat to " + contact.name}
        value={text}
        onChange={function (e) {
          setText(e.target.value);
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}

function ContactList({ contacts, selectedContact, onSelect }) {
  return (
    <section>
      <ul>
        {contacts.map(function (contact) {
          return (
            <li key={contact.email}>
              <button
                onClick={function () {
                  onSelect(contact);
                }}
              >
                {contact.name}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={function () {
          setActiveIndex(0);
        }}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={function () {
          setActiveIndex(1);
        }}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({ children, title, isActive, onShow }) {
  return (
    <section style={{ padding: 10, border: "1px solid #aaa" }}>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  const fullName = firstName + " " + lastName;

  return (
    <>
      <h2>Let's check you in</h2>
      <label style={{ display: "block", marginBottom: 5 }}>
        First Name:{" "}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label style={{ display: "block", marginBottom: 5 }}>
        Last Name:{" "}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

function Form3() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + " " + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + " " + e.target.value);
  }

  return (
    <>
      <h2>Let's check you in</h2>
      <label style={{ display: "block", marginBottom: 5 }}>
        First Name:{" "}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label style={{ display: "block", marginBottom: 5 }}>
        Last Name:{" "}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

function Form2() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error);
    } finally {
      setAnswer("");
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {error !== null && <p style={{ color: "red" }}>{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 3000);
  });
}
