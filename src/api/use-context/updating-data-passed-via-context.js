import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function UpdatingData() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <Button
        onClick={function () {
          setTheme("light");
        }}
      >
        Switch to light theme
      </Button>
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

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;

  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
