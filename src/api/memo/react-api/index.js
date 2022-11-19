import { memo, useState } from "react";

export function Index() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <p>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          value={name}
          onChange={function (event) {
            setName(event.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="address">Address: </label>
        <input
          id="address"
          value={address}
          onChange={function (event) {
            setAddress(event.target.value);
          }}
        />
      </p>
      <Greeting name={name} />
    </>
  );
}

const Greeting = memo(function ({ name }) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return <h3>Hello, {name}!</h3>;
});
