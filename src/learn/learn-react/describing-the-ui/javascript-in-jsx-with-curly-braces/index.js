export default function Index() {
  return (
    <>
      <Avatar />
      <Avatar2 />
    </>
  );
}

function Avatar() {
  return (
    <img
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
      className="avatar"
    />
  );
}

function Avatar2() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";

  return (
    <img
      src={avatar}
      alt={description}
      className="avatar"
    />
  );
}
