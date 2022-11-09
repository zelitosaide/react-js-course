// import { MyApp } from "./learn/quick_start/MyApp";
import { PassingData } from "./api/use-context/passing-data-deeply-into-the-tree";
import { FilterableProductTable } from "./learn/thinking_in_react/FilterableProductTable";

import { PRODUCTS as products } from "./learn/thinking_in_react/products";

function App() {
  return (
    // <MyApp />
    // <FilterableProductTable products={products} />
    <PassingData />
  );
}

export default App;
