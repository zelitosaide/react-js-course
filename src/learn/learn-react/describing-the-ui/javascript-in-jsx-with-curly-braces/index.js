import { formatDate } from "../../../../utils/services";

const today = new Date();

export default function Index() {
  return (
    <>
      <Avatar />
      <Avatar2 />
      <TodoList />
      <TodoList2 />
    </>
  );
}

function TodoList() {
  const name = "Gregorio Y. Zara";
  return <h1>{name}'s To Do List</h1>;
}

function TodoList2() {
  return <h1>To Do List for {formatDate(today)}</h1>;
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
