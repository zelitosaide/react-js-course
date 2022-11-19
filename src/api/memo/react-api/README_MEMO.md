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

A React component should always have [pure rendering logic](https://beta.reactjs.org/learn/keeping-components-pure). This means that it must return the same output if its props, state, and context haven't changed. By using `memo`, you are telling React that your component complies with this requirement, so React doens't need to re-render as long as its props haven't changed. When you use `memo`, your component will still re-render if its own state changes or if a context that it's using changes.

In this example, notice that the `Greeting` component re-renders whenever `name` is changed (because that's one of its props), but not when `address` is changed (because it's not passed to `Greeting` as a prop):

### Updating a memoized component using state

### Updating a memoized component using a context

### Minimizing props changes

### Specifying a custom comparison function

## Reference

### `memo(Component, arePropsEqual?)`

## Troubleshooting

### My component re-renderd when a prop is an object, array, or function