import { people } from "../../../../utils/data";

export default function Index() {
  return <List />;
}

function List() {
  const chemists = people.filter(function (person) {
    return person.profession === "chemist";
  });

  const listItems = chemists.map(function (person) {
    return <li key={person.id}>{person.name}</li>;
  });

  return <ul>{listItems}</ul>;
}

function List2() {
  const listItems = people.map(function (person) {
    return <li key={person.id}>{person.name}</li>;
  });

  return <ul>{listItems}</ul>;
}
