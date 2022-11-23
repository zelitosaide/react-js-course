export function ImportingExportingComponents() {}

// --------------------------------------------------------
// These currently lives in a root component file
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

// --------------------------------------------------------
// app.js
// import { Gallery2 } from "./Gallery2.js";

export function App() {
  return <Gallery2 />;
}

// gallery2.js
export function Profile2() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export function Gallery2() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

// --------------------------------------------------------
export function Profile3() {
  // ...
}

import { Profile } from "./Gallery.js";

export function App2() {
  return <Profile />;
}
