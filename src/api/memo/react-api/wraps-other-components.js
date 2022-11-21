import { useState } from "react";

export function WrapsOtherComponents() {
  return (
    <Wrapper>
      <Child />
    </Wrapper>
  );
}

function Wrapper({ children }) {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={theme === "dark" ? "panel-dark" : "panel-light"}>
      {children}
      <p>
        <label htmlFor="theme">Use dark mode</label>
        <input
          id="theme"
          type="checkbox"
          checked={theme === "dark"}
          onChange={function (event) {
            setTheme(event.target.checked ? "dark" : "light");
          }}
        />
      </p>
    </div>
  );
}

function Child() {
  console.log("child rendered");
  return <div>child component</div>;
}
