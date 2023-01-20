import { person } from "../../../utils/data";

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todo</h1>
    </div>
  );
}
