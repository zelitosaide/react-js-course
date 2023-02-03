import { useState } from "react";
import { cart as initialProducts } from "../../../../../data/data";

/**
 * Challenge 2 of 4: Remove an item from the shopping cart
 */
export default function Index() {
  return <ShoppingCart />;
}

function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(
      products.map(function (product) {
        if (product.id === productId) {
          return { ...product, count: product.count + 1 };
        } else {
          return product;
        }
      })
    );
  }

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
