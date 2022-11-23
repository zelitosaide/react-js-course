export function JavaScriptJSXCurlyBraces() {}

// --------------------------------------------------------
export function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}

// --------------------------------------------------------
export function Avatar2() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";

  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}

// --------------------------------------------------------
export function TodoList() {
  const name = "Gregorio Y. Zara";
  return <h1>{name}'s To Do List</h1>;
}

// --------------------------------------------------------
const today = new Date();

// "pt-pt"
function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);
}

export function TodoList2() {
  return <h1>To Do List for {formatDate(today)}</h1>;
}

// --------------------------------------------------------
export function TodoList3() {
  return (
    <ul
      style={{
        backgroundColor: "black",
        color: "pink",
      }}
    >
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

// --------------------------------------------------------
const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export function TodoList4() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
