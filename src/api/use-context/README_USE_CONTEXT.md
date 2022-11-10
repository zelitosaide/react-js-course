> ## Content

- [useContext](#usecontext)
- [Usage](#usage)
  - [Passing data deeply into the tree](#passing-data-deeply-into-the-tree)
    - [Pitfall](#pitfall)
  - [Updating data passed via context](#updating-data-passed-via-context)
    - [Examples of updating context](#examples-of-updating-context)
      - [Updating a value via context](#updating-a-value-via-context)
      - [Updating an object via context](#updating-an-object-via-context)
      - [Multiple contexts](#multiple-contexts)
      - [Extracting providers to a component](#extracting-providers-to-a-component)
      - [Scaling up with context and a reducer](#scaling-up-with-context-and-a-reducer)
  - [Specifying a fallback default value](#specifying-a-fallback-default-value)
  - [Overriding context for a part of the tree](#overriding-context-for-a-part-of-the-tree)
  - [Optimizing re-renders when passing objects and functions](#optimizing-re-renders-when-passing-objects-and-functions)
- [Reference](#reference)
  - [`useContext(Somecontext)`](#usecontextsomecontext)
- [Troubleshooting](#troubleshooting)
  - [My component doesn't see the value from my provider](#my-component-doesnt-see-the-value-from-my-provider)
  - [I am always getting `undefined` from my context although the default value is different](#i-am-always-getting-undefined-from-my-context-although-the-default-value-is-different)
- [What is lefting?](#what-is-lefting)
- [What is the Next?](#what-is-the-next)


## useContext

`useContext` is a React Hook that lets you read and subscribe to [context](https://beta.reactjs.org/learn/passing-data-deeply-with-context) from your component.

```js
const value = useContext(SomeContext); 
```

## Usage

### Passing data deeply into the tree

Call `useContext` at the top level of your component to read and subscribe to [context](https://beta.reactjs.org/learn/passing-data-deeply-with-context).

```javascript
import { useContext } from "react";

function Button() {
  const theme = useContext(ThemeContext);
  // ...
}
```

`useContext` returns the `context value` for the `context` you passed. To determine the context value, React searches the component tree and finds the closest context provider above for that particular context.

To Pass context to a `Button`, wrap it or one of its parent components into the corresponding context provider:

```javascript
function MyPage() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  // ... renders buttons inside ...
}
```

It doesn't matter how many layers of components there are between the provider and the `Button`. When a `Button` anywhere inside of `Form` calls `useContext(ThemeContext)`, it will receive `"dark"` as the value.

#### Pitfall

> `useContext()` always looks for the closest provider above the component that calls it. It searches upwards and does not consider providers in the component from which your're calling `useContext()`.

<details>
  <summary>Show code</summary>

  <br>

  ```javascript
  import { createContext, useContext } from "react";

  const ThemeContext = createContext(null);

  export function MyApp() {
    return (
      <ThemeContext.Provider value="dark">
        <Form />
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
    return (
      <button className={className}>
        {children}
      </button>
    );
  }
  ```
</details>

### Updating data passed via context

Often, you'll want the context to change over time. To update context, you need to combine it with [state.](https://beta.reactjs.org/apis/react/useState) Declare a state variable in the parent component, and pass the current state down as the `context value` to the provider.

```javascript
import { useState, createContext, useContext } from "react";

const ThemeContext = createContext(null);

function MyPage() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <Button 
        onClick={function() {
          setTheme("light");
        }}
      >
        Switch to light theme
      </Button>
    </ThemeContext.Provider>
  );
}

function Form() {
  // ....
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
```

Now any `Button` inside of the provider will receive the current `theme` value. If you call `setTheme` to update the `theme` value that you pass to the provider, all `Button` components will re-render with the new `"light"` value.

####  Examples of updating context

##### Updating a value via context

In this example, the `MyApp` component holds a state variable which is then passed to the `ThemeContext` provider. Checking the "Dark mode" checkbox updates the state. Changing the provided value re-renders all the components using that context.

```javascript
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function MyApp() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <lable htmlFor="checkbox">Use dark mode</label>
      <input 
        id="checkbox"
        type="checkbox"
        checked={theme === "dark"}
        onChange={function(event) {
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

  return (
    <button className={className}>
      {children}
    </button>
  );
}
```

##### Updating an object via context

In this example, there is a `currentUser` state variable which holds an object. You combine `{ currentUser, setCurrentUser }` into a single object and pass it down through the context inside the `value={}`
. This lets any component below, such as `LoginButton`, read both `currentUser` and `setCurrentUser`, and then call `setCurrentUser` when needed.


```javascript
import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(null);

export function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser
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
  const {
    currentUser,
    setCurrentUser
  } = useContext(CurrentUserContext);

  if (currentUser !== null) {
    return <p>You logged in as {currentUser.name}.</p>
  }

  return (
    <Button
      onClick={function() {
        setCurrentUser({ name: "Advike" });
      }}
    >
      Log in as Advika
    </Button>
  );  
}

function Button({ children, onClick }) {
  return (
    <button className="button-dark" onClick={onClick}>
      {children}
    </button>
  );
}
```

##### Multiple contexts

In this example, there are two independent contexts. `ThemeContext` provides the current theme, which is a string, while `CurrentUserContext` holds the object representing the current user.

```javascript
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

export function MyApp() {
  const [theme, setTheme] = useState("light");
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser
        }}
      >
        <WelcomePanel />
        <label htmlFor="theme">Use dark mode</label>
        <input
          id="theme"
          checked={theme === "dark"}
          onChange={function(event) {
            setTheme(event.target.checked ? "dark" : "light");
          }}
        />
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

  return (
    <p>You logged in as {currentUser.name}.</p>
  );
}

function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName !== "" && lastName !== "";

  return (
    <>
      <label htmlFor="first-name">First Name:{" "}</label>
      <input 
        required
        id="first-name"
        value={firstName}
        onChange={function(event) {
          setFirstName(event.target.value);
        }}
      />
      <label htmlFor="last-name">Last Name:{" "}</label>
      <input 
        required
        id="last-name"
        value={lastName}
        onChange={function(event) {
          setLastName(event.target.value);
        }}
      />
      <Button
        disabled={!canLogin}
        onClick={function() {
          setCurrentUser({
            name: firstName + " " + lastName
          });
        }}
      >
        Log in
      </Button>
      {!canLogin && <i>Fill in both fields.</i>}
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
```

##### Extracting providers to a component

As your app grows, it is expected that you'll have a "pyramid" of contexts closer to the root of your app. There is nothing wrong with that. However, if you dislike the nesting aesthetically, you can extract the providers into a single component. In this example, `MyProviders` hides the "plumbing" and renders the children passed to it inside the necessary providers. Note that the `theme` and `setTheme` state is needed in `MyApp` itself, so `MyApp` still owns that piece of the state.

```javascript
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

export function MyApp() {
  const [theme, setTheme] = useState("light");

  return (
    <MyProviders theme={theme} setTheme={setTheme}>
      <WelcomePanel />
      <p>
        <label htmlFor="theme">Use dark mode</label>
        <input
          id="theme"
          type="checkbox"
          checked={theme === "dark"}
          onChange={function(event) {
            setTheme(event.target.checked ? "dark" : "light");
          }}
        />
      </p>
    </MyProviders>
  );
}

function MyProviders({ children, theme, setTheme }) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserProvider
        value={{
          currentUser,
          setCurrentUser
        }}
      >
        {children}
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

function WelccomePanel() {
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

  return (
    <p>You logged in as {currentUser.name}.</p>
  );
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
          onChange={function(event) {
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
          onChange={function(event) {
            setLastName(event.target.value);
          }}
        />
      </p>
      <Button
        disabled={!canLogin}
        onClick={function() {
          setCurrentUser({
            name: firstName + " " + lastName
          });
        }}
      >
        Log in
      </Button>
      {!canLogin && <i>Fill in both fields.</i>}
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
```

##### Scaling up with context and a reducer

### Specifying a fallback default value

If React can't find any providers of that particular `context` in the parent tree, the context value returned by `useContext()` will be equal to the `default value` that you specified when you [created that context](https://beta.reactjs.org/apis/react/createContext):

```javascript
const ThemeContext = createContext(null);
```

The default value never changes. If you want to update context, use it with state as [described above](https://beta.reactjs.org/apis/react/useContext#updating-data-passed-via-context).

Often, instead of `null`, there is some more meaningful value you can use as a default, for example:

```javascript
const ThemeContext = createContext("light");
```

This way, if you accidentally render some component without a corresponding provider, it won't break. This also helps your components work well in a test environment without setting up a lot of providers in the tests.

In the example below, the "Toggle theme" button is always light because it's outside any theme context provider and the default context theme value is `"light"`. Try editing the default theme to be `"dark"`.

```javascript
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

export function MyApp() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
      <Button
        onClick={function() {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Toggle theme
      </Button>
    </>
  );
}
```

### Overriding context for a part of the tree

### Optimizing re-renders when passing objects and functions

## Reference

### `useContext(Somecontext)`

## Troubleshooting

### My component doesn't see the value from my provider

### I am always getting `undefined` from my context although the default value is different

## What is lefting?

* [Example 5 of 5: Scaling up with context and a reducer](#scaling-up-with-context-and-a-reducer)

## What is the Next?

* [useReducer](https://beta.reactjs.org/apis/react/useReducer)
* [useMemo](https://beta.reactjs.org/apis/react/useMemo)
* [useCallback](https://beta.reactjs.org/apis/react/useCallback)
* [memo](https://beta.reactjs.org/apis/react/memo)