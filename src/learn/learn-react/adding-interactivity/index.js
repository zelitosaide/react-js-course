export default function Index() {
  return <RespondingToEvents />;
}

function RespondingToEvents() {}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
