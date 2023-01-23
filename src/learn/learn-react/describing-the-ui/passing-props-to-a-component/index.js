import { getImageUrl } from "../../../../utils/services";

export default function Index() {
  return <Avatar />;
}

function Profile() {
  return (
    <Avatar2
      person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
      size={100}
    />
  );
}

function Avatar() {
  return (
    <img
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
      className="avatar"
      style={{ width: 100, height: 100 }}
    />
  );
}

function Avatar2({ person, size }) {
  return (
    <img
      src={getImageUrl(person)}
      alt={person.name}
      style={{ width: size, height: size }}
      className="avatar"
    />
  );
}

/**
 * Step 1: Pass props to the child component
 *
 * Step 2: Read props inside the child component
 */
