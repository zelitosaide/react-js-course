export default function Index() {
  return <Button />;
}

function AlertButton({ message, children }) {
  return (
    <button
      onClick={function () {
        alert(message);
      }}
    >
      {children}
    </button>
  );
}

function Button() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
