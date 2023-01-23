import { Fragment } from "react";

import { people } from "../../../../utils/data";
import { getImageUrl } from "../../../../utils/services";

export default function Index() {
  return <List />;
}

function List() {
  const listItems = people.map(function (person) {
    return (
      <Fragment key={person.id}>
        <h2>{person.name}</h2>
        <p>known for {person.accomplishment}</p>
      </Fragment>
    );
  });

  return <div>{listItems}</div>;
}

function List2() {
  const chemists = people.filter(function (person) {
    return person.profession === "chemist";
  });

  const listItems = chemists.map(function (person) {
    return (
      <li
        key={person.id}
        style={{ display: "flex", gap: 20 }}
      >
        <img
          src={getImageUrl(person)}
          alt={person.name}
          style={{ width: 100, height: 100, borderRadius: "50%" }}
        />
        <p>
          <b>{person.name}:</b> {person.profession} known for{" "}
          {person.accomplishment}
        </p>
      </li>
    );
  });

  return (
    <ul
      style={{
        padding: "0 10px",
        listStyleType: "none",
      }}
    >
      {listItems}
    </ul>
  );
}

function List3() {
  const listItems = people.map(function (person) {
    return <li key={person.id}>{person.name}</li>;
  });

  return <ul>{listItems}</ul>;
}
