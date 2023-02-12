export default function Index() {
  return <Page />;
}

function Page() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
    </Section>
  );
}

function Section({ children }) {}

function Heading({ level, children }) {}
