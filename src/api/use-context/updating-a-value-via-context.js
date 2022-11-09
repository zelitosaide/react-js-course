import { useState, createContext, useContext } from "react";

const ThemeContext = createContext(null);

export function UpadatingViaContext() {
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
  return;
}
