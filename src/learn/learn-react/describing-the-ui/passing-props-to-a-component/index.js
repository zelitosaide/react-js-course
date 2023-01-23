import { getImageUrl } from "../../../../utils/services";

export default function Index() {
  return (
    <div>
      <Avatar />
      <Profile />
      <Profile2
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
        size={80}
      />
    </div>
  );
}

function Profile() {
  return (
    <div>
      <Avatar2
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
        // size={100}
      />
      <Avatar2
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
        size={80}
      />
      <Avatar2
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
        size={50}
      />
    </div>
  );
}

function Profile2(props) {
  return (
    <div className="card">
      <Avatar2 {...props} />
    </div>
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
      style={{ width: 100, height: 100, margin: 10 }}
    />
  );
}

function Avatar2({ person, size = 100 }) {
  return (
    <img
      src={getImageUrl(person)}
      alt={person.name}
      style={{ width: size, height: size, margin: 10 }}
      className="avatar"
    />
  );
}

/**
 * Step 1: Pass props to the child component
 *
 * Step 2: Read props inside the child component
 */
