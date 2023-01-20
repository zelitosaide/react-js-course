import { getImageUrl } from "../../../utils/services";

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Avatar({ size, person }) {
  return (
    <img
      style={{ margin: 20, borderRadius: "50%" }}
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
