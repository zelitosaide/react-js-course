export function YourFirstComponent() {}

// --------------------------------------------------------
<article>
  <h1>My First Component</h1>
  <ol>
    <li>Components: UI Building Blocks</li>
    <li>Defining a Component</li>
    <li>Using a Component</li>
  </ol>
</article>;

// --------------------------------------------------------
<PageLayout>
  <NavigationHeader>
    <SearchBar />
    <Link to="/docs">Docs</Link>
  </NavigationHeader>
  <Sidebar />
  <PageContent>
    <TableOfContents />
    <DocumentationText />
  </PageContent>
</PageLayout>;

// --------------------------------------------------------
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  );
}

export function Gallery() {
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
// Components can render other components, but you must never nest their definiitions:
export function Parent() {
  // 🔴 Never define a component inside another component!
  function Child() {
    // ...
  }
  // ...
}

// The snippet above is very slow and causes bugs. Instead, define every component at the top level:
export function Father() {
  // ...
}

// ✅ Declare components at the top level
function Son() {
  // ...
}

// When a child component needs some data from a parent, pass it by props instead of nesting definitions.
