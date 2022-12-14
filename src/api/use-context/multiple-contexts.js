import { createContext, useContext, useState } from "react";

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
        <p>
          <label htmlFor="theme">Use dark mode</label>
          <input
            id="theme"
            checked={theme === "dark"}
            type="checkbox"
            onChange={function (event) {
              setTheme(event.target.checked ? "dark" : "light");
            }}
          />
        </p>
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

function WelcomePanel() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
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

function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);

  return <p>You logged in as {currentUser.name}.</p>;
}

function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName !== "" && lastName !== "";

  return (
    <>
      <p>
        <label htmlFor="first-name">First Name: </label>
        <input
          required
          id="first-name"
          value={firstName}
          onChange={function (event) {
            setFirstName(event.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="last-name">Last Name: </label>
        <input
          required
          id="last-name"
          value={lastName}
          onChange={function (event) {
            setLastName(event.target.value);
          }}
        />
      </p>
      <Button
        disabled={!canLogin}
        onClick={function () {
          setCurrentUser({ name: firstName + " " + lastName });
        }}
      >
        Log in
      </Button>
      {!canLogin && <i>Fill in both fields</i>}
    </>
  );
}

function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
