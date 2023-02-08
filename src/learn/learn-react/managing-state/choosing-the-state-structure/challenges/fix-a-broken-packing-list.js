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
import { packingList as initialItems } from "../../../../../data/data";

let nextId = 3;

export default function Index() {
  const [items, setItems] = useState(initialItems);
  const [total, setTotal] = useState(3);
  const [packed, setPacked] = useState(1);
}
