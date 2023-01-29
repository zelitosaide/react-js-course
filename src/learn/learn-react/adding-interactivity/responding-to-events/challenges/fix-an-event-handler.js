export default function LightSwitch() {
  function handleClick() {
    const bodyStyle = document.body.style;
    if (bodyStyle.background === "black") {
      bodyStyle.background = "white";
    } else {
      bodyStyle.background = "black";
    }
  }
  return <button onClick={handleClick}>Toggle the light</button>;
}
export default function LightSwitch() {
  function handleClick() {
    const bodyStyle = document.body.style;
    if (bodyStyle.background === "black") {
      bodyStyle.background = "white";
    } else {
      bodyStyle.background = "black";
    }
  }
  return <button onClick={handleClick}>Toggle the light</button>;
}
