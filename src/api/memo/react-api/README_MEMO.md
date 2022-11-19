> ## memo

`memo` lets you skip re-rendering a component when its props are unchanged.

```javascript
const MemoizedComponent = memo(SomeComponent, arePropsEqual?);
```

> ## Content

- [Usage](#usage)
  - [Skipping re-rendering when props are unchanged](#skipping-re-rendering-when-props-are-unchanged)
  - [Updating a memoized component using state](#updating-a-memoized-component-using-state)
  - [Updating a memoized component using a context](#updating-a-memoized-component-using-a-context)
  - [Minimizing props changes](#minimizing-props-changes)
  - [Specifying a custom comparison function](#specifying-a-custom-comparison-function)
- [Reference](#reference)
  - [`memo(Component, arePropsEqual?)`](#memocomponent-arepropsequal)
- [Troubleshooting](#troubleshooting)
  - [My component re-renderd when a prop is an object, array, or function](#my-component-re-renderd-when-a-prop-is-an-object-array-or-function)

## Usage

### Skipping re-rendering when props are unchanged

React normally re-renders a component whenever its parents re-renders. With `memo`, you can create a component that React will not re-render when its parent re-renders so long as its new props are the same as the old props. Such a component is said to be memoized.

To memoize a component, wrap it in a call to `memo` and use the value that it returns in place of your original component:

```javascript
const Greeting = memo(function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
});

export default Greeting;
```

### Updating a memoized component using state

### Updating a memoized component using a context

### Minimizing props changes

### Specifying a custom comparison function

## Reference

### `memo(Component, arePropsEqual?)`

## Troubleshooting

### My component re-renderd when a prop is an object, array, or function