> ## Content

- [useReducer](#usereducer)
- [Usage](#usage)
  - [Adding a reducer to a component](#adding-a-reducer-to-a-component)
  - [Writing the reducer function](#writing-the-reducer-function)
  - [Avoiding recreating the initial state](#avoiding-recreating-the-initial-state)
- [Reference](#reference)
  - [`useReducer(reducer, initialArg, init?)`](#usereducerreducer-initialarg-init)
  - [`dispatch` function](#dispatch-function)
- [Troubleshooting](#troubleshooting)
  - [I've dispatched an action, but logging gives me the old state value](#ive-dispatched-an-action-but-logging-gives-me-the-old-state-value)
  - [I've dispatched an action, but the screen doesn't update](#ive-dispatched-an-action-but-the-screen-doesnt-update)
  - [A part of my reducer state becomes undefined after dispatching](#a-part-of-my-reducer-state-becomes-undefined-after-dispatching)
  - [My entire reducer state becomes undefined after dispatching](#my-entire-reducer-state-becomes-undefined-after-dispatching)
  - [I'm getting an error: "Too many re-renders"](#im-getting-an-error-too-many-re-renders)
  - [My reducer or initializer function runs twice](#my-reducer-or-initializer-function-runs-twice)

## useReducer

`useReducer` is a React Hook that lets you add a [reducer](https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer) to your component.

```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init?);
```

## Usage

### Adding a reducer to a component

### Writing the reducer function

### Avoiding recreating the initial state

## Reference

### `useReducer(reducer, initialArg, init?)`

### `dispatch` function

## Troubleshooting

### I've dispatched an action, but logging gives me the old state value

### I've dispatched an action, but the screen doesn't update

### A part of my reducer state becomes undefined after dispatching

### My entire reducer state becomes undefined after dispatching

### I'm getting an error: "Too many re-renders"

### My reducer or initializer function runs twice