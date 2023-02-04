import { useState } from "react";

export default function Index() {
  return <Form />;
}

function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");
}
