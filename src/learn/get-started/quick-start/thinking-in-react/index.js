export default function FilterableProductTable({ products }) {
  console.log(products);

  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

function SearchBar() {}

function ProductTable({}) {}

function ProductCategoryRow() {}

function ProductRow() {}

/**
 * Step 1: Break the UI into a component hierarchy
 *
 * Step 2: Build a static version in React
 */
