export function Todos({ todos }) {
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
