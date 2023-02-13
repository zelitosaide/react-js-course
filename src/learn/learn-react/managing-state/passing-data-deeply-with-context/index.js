import { useContext } from "react";

import { LevelContext } from "./level-context";

export default function Index() {
  return (
    <>
      <Page2 />
      <Page3 />
      <Page />
    </>
  );
}

function Page() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

function Heading({ children }) {
  const level = useContext(LevelContext);

  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error("Unknown level: " + level);
  }
}

function Section({ children, level }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}

function Page3() {
  return (
    <Section2>
      <Heading2 level={1}>Title</Heading2>
      <Section2>
        <Heading2 level={2}>Heading</Heading2>
        <Heading2 level={2}>Heading</Heading2>
        <Heading2 level={2}>Heading</Heading2>
        <Section2>
          <Heading2 level={3}>Sub-heading</Heading2>
          <Heading2 level={3}>Sub-heading</Heading2>
          <Heading2 level={3}>Sub-heading</Heading2>
          <Section2>
            <Heading2 level={4}>Sub-sub-heading</Heading2>
            <Heading2 level={4}>Sub-sub-heading</Heading2>
            <Heading2 level={4}>Sub-sub-heading</Heading2>
          </Section2>
        </Section2>
      </Section2>
    </Section2>
  );
}

function Page2() {
  return (
    <Section2>
      <Heading2 level={1}>Title</Heading2>
      <Heading2 level={2}>Heading</Heading2>
      <Heading2 level={3}>Sub-heading</Heading2>
      <Heading2 level={4}>Sub-sub-heading</Heading2>
      <Heading2 level={5}>Sub-sub-sub-heading</Heading2>
      <Heading2 level={6}>Sub-sub-sub-sub-heading</Heading2>
    </Section2>
  );
}

function Section2({ children }) {
  return <section className="section">{children}</section>;
}

function Heading2({ level, children }) {
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error("Unknown level: " + level);
  }
}
