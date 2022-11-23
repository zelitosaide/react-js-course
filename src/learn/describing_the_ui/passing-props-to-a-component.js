export function PassingPropsToComponent() {}

// --------------------------------------------------------
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export function Profile() {
  return <Avatar />;
}

// --------------------------------------------------------
export function Profile2() {
  return <Avatar />;
}
