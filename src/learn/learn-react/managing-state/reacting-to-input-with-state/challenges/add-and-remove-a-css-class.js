/**
 * Challenge 1 of 3: Add and remove a CSS class
 *
 * Make it so that clicking on the picture removes the background--active
 * CSS class from the outer <div>, but adds the picture--active class to
 * the <img>. Clicking the background again should restore the original CSS
 * classes.
 *
 * Visually, you should expect that clicking on the picture removes the
 * purple background and highlights the picture border. Clicking outside
 * the picture highlights the background, but removes the picture border highlight.
 */
export default function Index() {
  return <Picture />;
}

function Picture() {
  return (
    <div className="background">
      <img
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
