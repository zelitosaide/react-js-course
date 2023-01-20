import Profile2 from "./profile";
import TodoList from "./todo-list";
import TodoList2 from "./todo-list2";

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
      style={{ margin: "0 10px 10px 0" }}
    />
  );
}

export function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <Profile2 />
      <TodoList />
      <TodoList2 />
    </section>
  );
}
