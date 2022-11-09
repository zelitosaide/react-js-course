import { createContext, useState } from "react";

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

export function MultipleContexts() {
  const [theme, setTheme] = useState("light");
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        <WelcomePanel />
        <label htmlFor="theme">Use dark mode</label>
        <input
          id="theme"
          checked={theme === "dark"}
          onChange={function (event) {
            setTheme(event.target.checked ? "dark" : "light");
          }}
        />
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

function WelcomePanel() {
  return;
}
