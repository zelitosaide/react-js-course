import { useState } from "react";

import {
  menu as initialItems,
  travelPlan as initialTravelPlan,
  flatTravelPlan as initialFlatTravelPlan,
} from "../../../../data/data";

export default function Index() {
  return (
    <>
      <MovingDot />
      <FeedbackForm2 />
      <FeedbackForm />
      <Form2 />
      <Form />
      <Menu2 />
      <Menu3 />
      <Menu4 />
      <Menu />
      <TravelPlan2 />
      <TravelPlan />
    </>
  );
}

function TravelPlan() {
  const [plan, setPlan] = useState(initialFlatTravelPlan);

  const root = plan[0];
  const planetIds = root.childIds;

  function handleComplete() {}

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(function (id) {
          return (
            <PlaceTree
              key={id}
              id={id}
              parentId={0}
              placesById={plan}
              onComplete={handleComplete}
            />
          );
        })}
      </ol>
    </>
  );
}

function PlaceTree({ id, parentId, placesById, onComplete }) {}

function TravelPlan2() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planets.map(function (place) {
          return (
            <PlaceTree2
              key={place.id}
              place={place}
            />
          );
        })}
      </ol>
    </>
  );
}

function PlaceTree2({ place }) {
  const childPlaces = place.childPlaces;

  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map(function (place) {
            return (
              <PlaceTree2
                key={place.id}
                place={place}
              />
            );
          })}
        </ol>
      )}
    </li>
  );
}

function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find(function (item) {
    return item.id === selectedId;
  });

  function handleItemChange(id, e) {
    setItems(
      items.map(function (item) {
        if (item.id === id) {
          return { ...item, title: e.target.value };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map(function (item) {
          return (
            <li key={item.id}>
              <input
                value={item.title}
                onChange={function (e) {
                  handleItemChange(item.id, e);
                }}
              />{" "}
              <button
                onClick={function () {
                  setSelectedId(item.id);
                }}
              >
                Choose
              </button>
            </li>
          );
        })}
      </ul>
      <p>You picked {selectedItem.title}</p>
    </>
  );
}

function Menu4() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  function handleItemChange(id, e) {
    if (id === selectedItem.id) {
      setSelectedItem({
        ...selectedItem,
        title: e.target.value,
      });
    }

    setItems(
      items.map(function (item) {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map(function (item) {
          return (
            <li key={item.id}>
              <input
                value={item.title}
                onChange={function (e) {
                  handleItemChange(item.id, e);
                }}
              />{" "}
              <button
                onClick={function () {
                  setSelectedItem(item);
                }}
              >
                Choose
              </button>
            </li>
          );
        })}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}

function Menu3() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  function handleItemChange(id, e) {
    setItems(
      items.map(function (item) {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map(function (item) {
          return (
            <li key={item.id}>
              <input
                value={item.title}
                onChange={function (e) {
                  handleItemChange(item.id, e);
                }}
              />{" "}
              <button
                onClick={function () {
                  setSelectedItem(item);
                }}
              >
                Choose
              </button>
            </li>
          );
        })}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}

function Menu2() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map(function (item) {
          return (
            <li key={item.id}>
              {item.title}{" "}
              <button
                onClick={function () {
                  setSelectedItem(item);
                }}
              >
                Choose
              </button>
            </li>
          );
        })}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  function handleFirstNamechange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Let's check you in</h2>
      <label style={{ display: "block" }}>
        First Name:{" "}
        <input
          value={firstName}
          onChange={handleFirstNamechange}
        />
      </label>
      <label style={{ display: "block" }}>
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
      <label style={{ display: "block" }}>
        First Name:{" "}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label style={{ display: "block" }}>
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

function FeedbackForm() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");

  const isSending = status === "sending";
  const isSent = status === "sent";

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    await sendMessage(text);
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at the Prancing Pony?</p>
      <textarea
        value={text}
        disabled={isSending}
        onChange={function (e) {
          setText(e.target.value);
        }}
      />
      <br />
      <button
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Loading...</p>}
    </form>
  );
}

function FeedbackForm2() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  }

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        value={text}
        disabled={isSending}
        onChange={function (e) {
          setText(e.target.value);
        }}
      />
      <br />
      <button
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

function sendMessage(text) {
  return new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });
}

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={function (e) {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "80vw",
        height: "50vh",
        backgroundColor: "lightblue",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          width: 20,
          height: 20,
          top: -10,
          left: -10,
          transform: `translate(${position.x}px, ${position.y}px)`,
          borderRadius: "50%",
        }}
      />
    </div>
  );
}
