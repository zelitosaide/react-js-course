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

### Updating a memoized component using state

### Updating a memoized component using a context

### Minimizing props changes

### Specifying a custom comparison function

## Reference

### `memo(Component, arePropsEqual?)`

## Troubleshooting

### My component re-renderd when a prop is an object, array, or function