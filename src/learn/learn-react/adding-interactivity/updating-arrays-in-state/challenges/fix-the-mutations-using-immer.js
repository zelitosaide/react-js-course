import { useState } from "react";

import { todos as initialTodos } from "../../../../../data/data";

/**
 * Challenge 4 of 4: Fix the mutations using Immer
 *
 * This is the same example as in the previous challenge. This time, fix
 * the mutations by using Immer. For your convenience, useImmer is already
 * imported, so you need to change the todos state variable to use it.
 */
export default function Index() {}

function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);
}
