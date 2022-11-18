> # useMemo

`useMemo` is a React Hook that lets you cache result of a calculation between re-renders.

```javascript
const cachedValue = useMemo(calculateValue, dependencies);s
```

> ## Content

- [Usage](#usage)
  - [Skipping expensive recalculations](#skipping-expensive-recalculations)
  - [Skipping re-rendering of components](#skipping-re-rendering-of-components)
  - [Memoizing a dependency of another Hook](#memoizing-a-dependency-of-another-hook)
  - [Memoizing a function](#memoizing-a-function)

## Usage

### Skipping expensive recalculations

To cache a calculation between re-renders, wrap it in a `useMemo` call at the top level of your component:

```javascript
import { useMemo } from "react";

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(function() {
    return filterTodos(todos, tab);
  }, [todos, tab]);
}
```

### Skipping re-rendering of components

### Memoizing a dependency of another Hook

### Memoizing a function