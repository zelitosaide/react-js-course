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

// --------------------------------------------------------
export function Profile3() {
  return (
    <Avatar2
      person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
      size={100}
    />
  );
}

// --------------------------------------------------------
function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

function Avatar2({ person, size }) {
  // person and size are available here
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export function Profile4() {
  return (
    <div>
      <Avatar2
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar2
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar2
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </div>
  );
}

// --------------------------------------------------------
function Avatar3(props) {
  const person = props.person;
  const size = props.size;
  // ...
}

// --------------------------------------------------------
function Avatar4({ person, size = 100 }) {
  // ...
}

// --------------------------------------------------------
function Profile5({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar5
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

function Avatar5(props) {}

// --------------------------------------------------------
function Profile6(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

// --------------------------------------------------------
<div>
  <img />
</div>;
