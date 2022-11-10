import { createContext, useContext } from "react";

const ThemeContext = createContext("dark");

export function SpecifyingFallbackDefaultValue() {
  return <Form />;
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Sign in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;

  return <button className={className}>{children}</button>;
}
