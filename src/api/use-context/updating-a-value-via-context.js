import { useState, createContext, useContext } from "react";

const ThemeContext = createContext(null);

export function UpadatingValueViaContext() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label htmlFor="theme">Use dark mode</label>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={function (event) {
          setTheme(event.target.checked ? "dark" : "light");
        }}
      />
    </ThemeContext.Provider>
  );
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
