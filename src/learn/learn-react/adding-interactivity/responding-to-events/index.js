export default function Index() {
  return (
    <>
      <Button2 />
      <Toolbar />
    </>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
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

function Button2() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
