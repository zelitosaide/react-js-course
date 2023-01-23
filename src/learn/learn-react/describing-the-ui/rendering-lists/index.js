import { people } from "../../../../utils/data";

export default function Index() {
  return <List />;
}

function List() {
  const listItems = people.map(function (person) {
    return <li key={person.id}>{person.name}</li>;
  });

  return <ul>{listItems}</ul>;
}
