import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

export function ExtractingProviderToComponent() {
  const [theme, setTheme] = useState("light");
}
