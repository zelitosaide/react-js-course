export default function Index() {
  return (
    <>
      <Image />
      <Gallery />
    </>
  );
}

function Gallery() {
  return (
    <div>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </div>
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
