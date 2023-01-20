import { people } from "../../../utils/data";
import { getImageUrl } from "../../../utils/services";

export default function List() {
  const listItems = people.map(function (person) {
    return (
      <li
        key={person.id}
        style={{
          marginBottom: 10,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
        }}
      >
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b> {person.profession} known for{" "}
          {person.accomplishment}
        </p>
      </li>
    );
  });

  return (
    <section>
      <h1>Scientists</h1>
      <ul style={{ listStyleType: "none", padding: "0px 10px" }}>
        {listItems}
      </ul>
    </section>
  );
}
