import { memo } from "react";

function todos({ todos }) {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map(function (todo, index) {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
}

const Todos = memo(todos);
// export default memo(Todos);

export { Todos };
