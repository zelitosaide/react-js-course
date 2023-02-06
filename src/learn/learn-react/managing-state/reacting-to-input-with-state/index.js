import { statuses } from "../../../../data/data";

export default function Index() {
  return (
    <>
      <Form2 status="empty" />
      <br />
      <DisplayingManyVisualStatesAtOnce />
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
            <Form status={status} />
          </section>
        );
      })}
    </>
  );
}

function Form({ status }) {
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
