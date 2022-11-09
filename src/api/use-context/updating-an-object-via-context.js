import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(null);

export function UpdatingObjectViaContext() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <Form />
    </CurrentUserContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
  );
}

function Panel({ title, children }) {
  return (
    <section className="panel-dark">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function LoginButton() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (currentUser !== null) {
    return <p>You logged in as {currentUser.name}.</p>;
  }

  return (
    <Button
      onClick={function () {
        setCurrentUser({ name: "Advika" });
      }}
    >
      Log in as Advika
    </Button>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      className="button-dark"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
