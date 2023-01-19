export default function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

function SearchBar() {}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach(function (product) {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }

    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );
    lastCategory = product.category;
  });

  console.log(rows);
  return <div></div>;
}

function ProductCategoryRow() {}

function ProductRow() {}

/**
 * Step 1: Break the UI into a component hierarchy
 *
 * Step 2: Build a static version in React
 */
