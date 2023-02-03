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

  function handleDecreaseClick(productId) {
    let nextProducts = products.map(function (product) {
      if (product.id === productId) {
        return { ...product, count: product.count - 1 };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter(function (product) {
      return product.count > 0;
    });
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
            <button
              onClick={function () {
                handleDecreaseClick(product.id);
              }}
            >
              -
            </button>
          </li>
        );
      })}
    </ul>
  );
}
