import { useState } from "react";

import { cart as initialProducts } from "../../../../../data/data";

/**
 * Challenge 1 of 4: Update an item in the shopping cart
 *
 * Fill in the handleIncreaseClick logic so that pressing ”+” increases
 * the corresponding number:
 */
export default function Index() {
  return <ShoppingCart />;
}

function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {}

  return (
    <ul>
      {products.map(function (product) {
        return (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>){" "}
            <button
              onClick={function () {
                handleIncreaseClick(product.id);
              }}
            >
              +
            </button>
          </li>
        );
      })}
    </ul>
  );
}
