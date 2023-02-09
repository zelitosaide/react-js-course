import { useState } from "react";

export default function Index() {
  return (
    <>
      <Accordion />
    </>
  );
}

function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About"></Panel>
      <Panel title="Etymology"></Panel>
    </>
  );
}

function Panel() {}
