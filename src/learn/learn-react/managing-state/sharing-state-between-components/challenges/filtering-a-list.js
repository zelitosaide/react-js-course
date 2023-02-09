import { useState } from "react";

import { foods } from "../../../../../data/data";
import { filterItems } from "../../../../../utils/utils";

/**
 * Challenge 2 of 2: Filtering a list
 */
export default function Index() {
  return <FilterableList />;
}

function FilterableList() {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar
        onChange={handleChange}
        value={query}
      />
      <hr />
      <List items={filterItems(foods, query)} />
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
              <td>{food.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function SearchBar({ value, onChange }) {
  return (
    <label>
      Seach{" "}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
