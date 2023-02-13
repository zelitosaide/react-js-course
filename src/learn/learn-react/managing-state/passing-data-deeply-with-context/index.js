import { useContext } from "react";

import { LevelContext, LevelContextV2 } from "./level-context";

export default function Index() {
  return (
    <>
      <Page2 />
      <Page3 />
      <Page4 />
      <Page />
    </>
  );
}

function Page() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

function Section({ children }) {
  const level = useContext(LevelContextV2);

  return (
    <section className="section">
      <LevelContextV2.Provider value={level + 1}>
        {children}
      </LevelContextV2.Provider>
    </section>
  );
}

function Heading({ children }) {
  const level = useContext(LevelContextV2);

  switch (level) {
    case 0:
      throw Error("Heading must be inside a Section!");
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

function Page4() {
  return (
    <Section3 level={1}>
      <Heading3>Title</Heading3>
      <Section3 level={2}>
        <Heading3>Heading</Heading3>
        <Heading3>Heading</Heading3>
        <Heading3>Heading</Heading3>
        <Section3 level={3}>
          <Heading3>Sub-heading</Heading3>
          <Heading3>Sub-heading</Heading3>
          <Heading3>Sub-heading</Heading3>
          <Section3 level={4}>
            <Heading3>Sub-sub-heading</Heading3>
            <Heading3>Sub-sub-heading</Heading3>
            <Heading3>Sub-sub-heading</Heading3>
          </Section3>
        </Section3>
      </Section3>
    </Section3>
  );
}

function Heading3({ children }) {
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

function Section3({ children, level }) {
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
