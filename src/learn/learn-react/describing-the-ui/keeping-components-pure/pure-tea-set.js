export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={3} />
      <Cup guest={5} />
    </>
  );
}

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}
