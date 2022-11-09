> # Content

- [useContext](#usecontext)
  - [Usage](#usage)
    - [Passing data deeply into the tree](#passing-data-deeply-into-the-tree)
      - [Pitfall](#pitfall)
    - [Updating data passed via context](#updating-data-passed-via-context)
    - [Specifying a fallback default value](#specifying-a-fallback-default-value)
    - [Overriding context for a part of the tree](#overriding-context-for-a-part-of-the-tree)
    - [Optimizing re-renders when passing objects and functions](#optimizing-re-renders-when-passing-objects-and-functions)
  - [Reference](#reference)
    - [`useContext(Somecontext)`](#usecontextsomecontext)
  - [Troubleshooting](#troubleshooting)
    - [My component doesn't see the value from my provider](#my-component-doesnt-see-the-value-from-my-provider)
    - [I am always getting `undefined` from my context although the default value is different](#i-am-always-getting-undefined-from-my-context-although-the-default-value-is-different)


# useContext

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

### Updating data passed via context

### Specifying a fallback default value

### Overriding context for a part of the tree

### Optimizing re-renders when passing objects and functions

## Reference

### `useContext(Somecontext)`

## Troubleshooting

### My component doesn't see the value from my provider

### I am always getting `undefined` from my context although the default value is different