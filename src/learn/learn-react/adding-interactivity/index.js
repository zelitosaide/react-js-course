import { sculptureList } from "../../../data/data";

export default function Index() {
  return (
    <>
      <RespondingToEvents />
    </>
  );
}

function Gallery() {}

function RespondingToEvents() {
  return (
    <Toolbar
      onPlayMovie={function () {
        alert("Playing!");
      }}
      onUploadImage={function () {
        alert("Uploading!");
      }}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
