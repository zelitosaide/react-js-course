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
