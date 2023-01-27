export default function Index() {
  return (
    <>
      <Button />
      <Toolbar />
    </>
  );
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

function Button() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
