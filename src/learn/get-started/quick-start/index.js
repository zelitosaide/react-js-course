import "./style.css";

export default function QuickStart() {
  return (
    <div>
      <h1>Welcome to my App</h1>
      <MyButton />
    </div>
  );
}

export function MyButton() {
  return <button>I'am a button</button>;
}

// Writing markup with JSX
export function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}

// Adding styles
export function AddingStyles() {
  return (
    <p className="p">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
  );
}
