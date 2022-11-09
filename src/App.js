// import { MyApp } from "./learn/quick_start/MyApp";
import { PassingData } from "./api/use-context/passing-data-deeply-into-the-tree";
import { UpadatingValueViaContext } from "./api/use-context/updating-a-value-via-context";
import { UpdatingObjectViaContext } from "./api/use-context/updating-an-object-via-context";
import { UpdatingData } from "./api/use-context/updating-data-passed-via-context";
import { FilterableProductTable } from "./learn/thinking_in_react/FilterableProductTable";

import { PRODUCTS as products } from "./learn/thinking_in_react/products";

function App() {
  return (
    // <MyApp />
    // <FilterableProductTable products={products} />
    // <PassingData />
    // <UpdatingData />
    // <UpadatingValueViaContext />
    <UpdatingObjectViaContext />
  );
}

export default App;
