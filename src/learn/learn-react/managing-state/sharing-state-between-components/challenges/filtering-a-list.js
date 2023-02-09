import { useState } from "react";

/**
 * Challenge 2 of 2: Filtering a list
 */
export default function Index() {
  return <FilterableList />;
}

function FilterableList() {
  return (
    <>
      <SearchBar />
      <hr />
      <List />
    </>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(function (food) {
          return (
            <tr key={food.id}>
              <td>{food.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

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
