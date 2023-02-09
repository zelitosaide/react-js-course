import { useState } from "react";

export default function Index() {
  return (
    <>
      <Accordion2 />
      <Accordion />
    </>
  );
}

function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={true}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={true}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive }) {
  return (
    <>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button>Show</button>}
    </>
  );
}

function Accordion2() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel2 title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel2>
      <Panel2 title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel2>
    </>
  );
}

function Panel2({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button
          onClick={function () {
            setIsActive(true);
          }}
        >
          Show
        </button>
      )}
    </section>
  );
}
