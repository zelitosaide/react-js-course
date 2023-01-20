export default function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

function SearchBar() {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
      />
      <label style={{ display: "block", marginTop: 4, marginBottom: 5 }}>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}

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

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

/**
 * Step 1: Break the UI into a component hierarchy
 *
 * Step 2: Build a static version in React
 *
 * Step 3: Find the minimal but complete representation of UI state
 *
 * Step 4: Identify where your state should live
 */
