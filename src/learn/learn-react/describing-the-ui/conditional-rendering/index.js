export default function Index() {
  return <PackingList />;
}

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {!!isPacked && "✔"}
    </li>
  );
}

function Item2({ name, isPacked }) {
  return <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>;
}

function Item3({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

function Item4({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          name="Space suit"
          isPacked={true}
        />
        <Item
          name="Helmet with a golden leaf"
          isPacked={true}
        />
        <Item
          name="Photo of Tam"
          isPacked={false}
        />
      </ul>
    </section>
  );
}
