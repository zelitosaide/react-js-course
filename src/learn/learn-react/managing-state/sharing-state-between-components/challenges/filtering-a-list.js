import { useState } from "react";

import { foods } from "../../../../../data/data";
import { filterItems } from "../../../../../utils/utils";

/**
 * Challenge 2 of 2: Filtering a list
 *
 * In this example, the SearchBar has its own query state that controls
 * the text input. Its parent FilterableList component displays a List
 * of items, but it doesn’t take the search query into account.
 *
 * Use the filterItems(foods, query) function to filter the list according
 * to the search query. To test your changes, verify that typing “s” into
 * the input filters down the list to “Sushi”, “Shish kebab”, and “Dim sum”.
 *
 * Note that filterItems is already implemented and imported so you don’t
 * need to write it yourself!
 */
export default function Index() {
  return <FilterableList />;
}

function FilterableList() {
  const [query, setQuery] = useState("");
  const results = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar
        onChange={handleChange}
        query={query}
      />
      <hr />
      <List items={results} />
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

function SearchBar({ query, onChange }) {
  return (
    <label>
      Search:{" "}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}
