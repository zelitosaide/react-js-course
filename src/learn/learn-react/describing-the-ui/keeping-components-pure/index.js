import ImpureComponent from "./impure-tea-set";
import PureComponent from "./pure-tea-set";
import LocalMutation from "./local-mutation-tea-set";
import InfinityCounter from "./infinity-counter";
import FixABrokenClock from "./challenges/fix-a-broken-clock";
import FixABrokenProfile from "./challenges/fix-a-broken-profile";
import FixABrokenStoryTray from "./challenges/fix-a-broken-story-tray";

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
      <h2>Infinity Counter</h2>
      <InfinityCounter />
      <h2>Fix a broken Clock</h2>
      <FixABrokenClock />
      <h2>Fix a broken Profile</h2>
      <FixABrokenProfile />
      <h2>Fix a broken story tray</h2>
      <FixABrokenStoryTray />
    </section>
  );
}

/**
 * You will learn:
 *
 * What purity is and how it helps you avoid bugs
 *
 * How to keep components pure by keeping changes out of the render phase
 *
 * How to use Strict Mode to find mistakes in your components
 */

/**
 * Characteristics of pure functions:
 *
 * a) It minds its own business. It does not change any objects or variables that existed
 *    before it was called.
 *
 * b) Same inputs, same output. Given the same inputs, a pure function should always return
 *    the same result.
 */

/**
 * Side Effects: (un)intended consequences:
 *
 * React’s rendering process must always be pure. Components should only return their JSX,
 * and not change any objects or variables that existed before rendering—that would make
 * them impure!
 */
