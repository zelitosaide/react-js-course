import { useState } from "react";
import { statuses } from "../../../../data/data";

export default function Index() {
  return (
    <>
      <Form2 status="empty" />
      <br />
      <DisplayingManyVisualStatesAtOnce />
      <Form />
    </>
  );
}

function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea
          disabled={status === "submitting"}
          onChange={handleTextareaChange}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {error !== null && <p style={{ color: "red" }}>{error.message}</p>}
      </form>
    </>
  );
}

function DisplayingManyVisualStatesAtOnce() {
  return (
    <>
      {statuses.map(function (status) {
        return (
          <section
            style={{
              borderTop: "1px solid #aaa",
              padding: 20,
            }}
            key={status}
          >
            <h4>Form ({status}):</h4>
            <Form3 status={status} />
          </section>
        );
      })}
    </>
  );
}

function Form3({ status }) {
  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  return (
    <>
      <form>
        <textarea disabled={status === "submitting"} />
        <br />
        <button disabled={status === "empty" || status === "submitting"}>
          Submit
        </button>
        {status === "error" && (
          <p style={{ color: "red" }}>
            Good guess but a wrong answer. Try again!
          </p>
        )}
      </form>
    </>
  );
}

function Form2({ status }) {
  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea disabled={status === "submitting"} />
        <br />
        <button disabled={status === "empty" || status === "submitting"}>
          Submit
        </button>
        {status === "error" && (
          <p style={{ color: "red" }}>
            Good guess but a wrong answer. Try again!
          </p>
        )}
      </form>
    </>
  );
}
