import { useState } from "react";

import "./styles.css"

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function Profile() {
  return (
    <>
      <h2>{user.name}</h2>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Phot of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

function AdminPanel() {
  return (
    <h2>Admin Panel</h2>
  );
}

function LoginForm() {
  return (
    <h2>Login Form</h2>
  );
}

function ShoppingList() {
  const listItems = products.map(product => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen"
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <ul>{listItems}</ul>
  );
}

export function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  let content, isLoggedIn;

  if (isLoggedIn) {
    content = <AdminPanel />
  } else {
    content = <LoginForm />
  }

  return (
    <div>
      <h1>
        Welcome to my app - Responding to events - Updating
        the screen - Using Hooks - Sharing data between components
      </h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />

      <h1>Writing markup with JSX - Adding styles - Displaying data</h1>
      <Profile />

      <h1>Conditional rendering </h1>
      <div>{content}</div>

      {/* OR */}

      <div>
        {isLoggedIn ? (
          <AdminPanel />
        ) : (
          <LoginForm />
        )}
      </div>

      {/* OR */}

      <div>
        {isLoggedIn && <AdminPanel />}
      </div>

      <h1>Rendering lists</h1>
      <ShoppingList />
    </div>
  );
}