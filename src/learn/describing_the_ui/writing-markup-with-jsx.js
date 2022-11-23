export function WritingMarkupWithJSX() {}

// --------------------------------------------------------
/* 
<h1>Hedy Lamarr's Todos</h1>
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  class="photo"
>
<ul>
  <li>Invent new traffic lights
  <li>Rehearse a movie scene
  <li>Improve the spectrum technology
</ul> 
*/

export default function TodoList() {
  // return (
  //   // ???
  // );
}

// --------------------------------------------------------
export function TodoList2() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        class="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

// --------------------------------------------------------
export function AriaData() {
  return (
    <input
      aria-label="name"
      type="text"
    />
  );
}
