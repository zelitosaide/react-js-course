import ImpureComponent from "./impure-tea-set";
import PureComponent from "./pure-tea-set";
import LocalMutation from "./local-mutation-tea-set";

export default function Index() {
  return <Recipes />;
}

function Recipe({ drinkers }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} of spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

function Recipes() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
      <h2>Impure Components</h2>
      <ImpureComponent />
      <h2>Pure Components</h2>
      <PureComponent />
      <h2>Local Mutation</h2>
      <LocalMutation />
    </section>
  );
}
