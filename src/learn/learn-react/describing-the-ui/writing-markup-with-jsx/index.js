export default function Index() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

/**
 * The Rules of JSX
 *
 * 1. Return a single root element
 *
 * 2. Close all the tags
 *
 * 3. camelCase all most of the things!
 *
 *    For historical reasons, aria-* and data-* attributes are written as in HTML with dashes.
 */
