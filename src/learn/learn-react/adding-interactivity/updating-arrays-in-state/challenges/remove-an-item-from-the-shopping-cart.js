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

  return (
    <ul>
      {products.map(function (product) {
        return <li key={product.id}>{product.name}</li>;
      })}
    </ul>
  );
}
