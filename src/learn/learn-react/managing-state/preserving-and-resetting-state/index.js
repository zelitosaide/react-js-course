export default function Index() {
  const counter = <Counter />;

  return (
    <div>
      {counter}
      {counter}
    </div>
  );
}

function Counter() {}
