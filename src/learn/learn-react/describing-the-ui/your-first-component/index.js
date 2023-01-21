export default function Index() {
  return <Gallery />;
}

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
      style={{ height: 200 }}
    />
  );
}

function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

/**
 * Step 1: Export the component
 *
 * Step 2: Define the function
 *
 * Step 3: Add markup
 */
