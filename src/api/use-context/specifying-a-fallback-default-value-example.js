import { useState, createContext, useContext } from "react";

const ThemeContext = createContext("light");

export function SpecifyingFallbackDefaultValueExample() {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
      <Button
        onClick={function () {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Toggle theme
      </Button>
    </>
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

function Panel({ children, title }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ onClick, children }) {
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
