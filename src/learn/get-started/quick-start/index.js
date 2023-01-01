import "./style.css";
import { products, user } from "../../../utils/data";

export default function QuickStart() {
  return (
    <div>
      <h1>Welcome to my App</h1>
      <MyButton />
    </div>
  );
}

export function MyButton() {
  return <button>I'am a button</button>;
}

// Writing markup with JSX
export function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}

// Adding styles
export function AddingStyles() {
  return (
    <p className="p">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
  );
}

// Displaying data
export function DisplayingData() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <h1>Dane estas bem?</h1>
    </>
  );
}

// Conditional rendering
export function ConditionalRendering() {
  const isLoggedIn = false;
  // let content;
  // if (isLoggedIn) {
  //   content = <AdminPanel />;
  // } else {
  //   content = <LoginForm />;
  // }
  // return <div>{content}</div>;

  // return <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;

  return <div>{isLoggedIn && <AdminPanel />}</div>;
}

function AdminPanel() {
  return (
    <div>
      <h1>Admin Panel</h1>
    </div>
  );
}

function LoginForm() {
  return (
    <div>
      <h1>Login Form</h1>
    </div>
  );
}

// Rendering lists
export function ShoppingList() {
  const listItems = products.map(function (product) {
    return (
      <li
        key={product.id}
        style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
      >
        {product.title}
      </li>
    );
  });
  return <ul>{listItems}</ul>;

  // return (
  //   <ul>
  //     {products.map(function (product) {
  //       return (
  //         <li
  //           key={product.id}
  //           style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
  //         >
  //           {product.title}
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );
}
