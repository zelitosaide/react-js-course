import { useTime } from "../../../../utils/utils";

export default function Index() {
  const time = useTime();

  return (
    <>
      <Image />
      <Gallery />
      <Clock time={time.toLocaleTimeString()} />
    </>
  );
}

function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}

function Gallery() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}
