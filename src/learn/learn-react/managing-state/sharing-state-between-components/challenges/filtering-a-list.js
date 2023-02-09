import { useState } from "react";

/**
 * Challenge 2 of 2: Filtering a list
 */
export default function Index() {}

function SearchBar() {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <label>
      Seach{" "}
      <input
        value={query}
        onChange={handleChange}
      />
    </label>
  );
}
