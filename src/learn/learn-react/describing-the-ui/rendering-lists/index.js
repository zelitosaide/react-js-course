import { people } from "../../../../utils/data";
import { getImageUrl } from "../../../../utils/services";

export default function Index() {
  return <List />;
}

function List() {
  const chemists = people.filter(function (person) {
    return person.profession === "chemist";
  });

  const listItems = chemists.map(function (person) {
    return (
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b> {person.profession}
        </p>
      </li>
    );
  });

  return <ul>{listItems}</ul>;
}

function List2() {
  const listItems = people.map(function (person) {
    return <li key={person.id}>{person.name}</li>;
  });

  return <ul>{listItems}</ul>;
}
