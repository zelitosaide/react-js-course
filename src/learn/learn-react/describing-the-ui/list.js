import { people } from "../../../utils/data";
import { getImageUrl } from "../../../utils/services";

export default function List() {
  const listItems = people.map(function (person) {
    return (
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
      </li>
    );
  });

  return (
    <section>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </section>
  );
}
