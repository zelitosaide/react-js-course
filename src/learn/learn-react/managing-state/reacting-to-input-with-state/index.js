export default function Index() {
  return <Form status="empty" />;
}

function Form({ status }) {
  if (status === "success") {
    return <h1>That's right!</h1>;
  }
}
