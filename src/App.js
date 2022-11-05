// import { MyApp } from "./learn/quick_start/MyApp";
import { FilterableProductTable } from "./learn/thinking_in_react/FilterableProductTable";

import { PRODUCTS as products } from "./learn/thinking_in_react/products";

function App() {
  return (
    // <MyApp />
    <FilterableProductTable products={products} />
  );
}

export default App;
