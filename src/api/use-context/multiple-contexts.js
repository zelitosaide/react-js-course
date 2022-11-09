import { createContext, useState } from "react";

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

export function MultipleContexts() {
  const [theme, setTheme] = useState("light");
  const [currentUser, setCurrentUser] = useState(null);
}
