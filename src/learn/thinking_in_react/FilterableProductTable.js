import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";

export function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
