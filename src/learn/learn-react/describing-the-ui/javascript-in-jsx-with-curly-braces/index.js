export default function Index() {
  return (
    <>
      <Avatar />
      <Avatar2 />
      <TodoList />
    </>
  );
}

function TodoList() {
  const name = "Gregorio Y. Zara";
  return <h1>{name}'s To Do List</h1>;
}

function Avatar() {
  return (
    <img
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
      className="avatar"
    />
  );
}

function Avatar2() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";

  return (
    <img
      src={avatar}
      alt={description}
      className="avatar"
    />
  );
}
