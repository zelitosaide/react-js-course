/**
 * Challenge 2 of 4: Fix a broken packing list
 *
 * This packing list has a footer that shows how many items are packed,
 * and how many items there are overall. It seems to work at first, but
 * it is buggy. For example, if you mark an item as packed and then delete
 * it, the counter will not be updated correctly. Fix the counter so that
 * it’s always correct.
 */
import { useState } from "react";

import { packingItems as initialItems } from "../../../../../data/data";

let nextId = 3;

export default function Index() {
  const [items, setItems] = useState(initialItems);

  const packed = items.filter(function (item) {
    return item.packed;
  }).length;

  function handleAddItem(title) {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  }

  function handleChangeItem(nextItem) {
    setItems(
      items.map(function (item) {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  }

  function handleDeleteItem(itemId) {
    setItems(
      items.filter(function (item) {
        return item.id !== itemId;
      })
    );
  }

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <p>
        {packed} out of {items.length} packed!
      </p>
    </>
  );
}

function AddItem({ onAddItem }) {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        value={title}
        placeholder="Add item"
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      />{" "}
      <button
        onClick={function () {
          setTitle("");
          onAddItem(title);
        }}
      >
        Add
      </button>
    </>
  );
}

function PackingList({ items, onChangeItem, onDeleteItem }) {
  return (
    <ul>
      {items.map(function (item) {
        return (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.packed}
                onChange={function (e) {
                  onChangeItem({
                    ...item,
                    packed: e.target.checked,
                  });
                }}
              />{" "}
              {item.title}
            </label>{" "}
            <button
              onClick={function () {
                onDeleteItem(item.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
