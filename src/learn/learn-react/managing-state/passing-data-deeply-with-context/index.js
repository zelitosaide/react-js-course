export default function Index() {
  return <Page />;
}

function Page() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Heading level={2}>Heading</Heading>
    </Section>
  );
}

function Section({ children }) {
  return <section className="section">{children}</section>;
}

function Heading({ level, children }) {}
