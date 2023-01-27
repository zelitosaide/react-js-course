export default function Index() {
  return (
    <>
      <Button2 />
      <Toolbar2 />
      <Toolbar3 />
      <Toolbar4
        onPlayMovie={function () {
          alert("Playing!");
        }}
        onUploadImage={function () {
          alert("Uploading!");
        }}
      />
      <Toolbar5 />
      <Toolbar6 />
      <Toolbar />
    </>
  );
}

function Toolbar() {
  return (
    <div
      style={{ padding: 5, background: "#aaa", marginTop: 5 }}
      onClickCapture={function () {
        alert("Sent to analytics");
      }}
    >
      <ButtonWithStopPropagation
        onClick={function () {
          alert("Playing!");
        }}
      >
        Play Movie
      </ButtonWithStopPropagation>
      <ButtonWithStopPropagation
        onClick={function () {
          alert("Uploading!");
        }}
      >
        Upload Image
      </ButtonWithStopPropagation>
    </div>
  );
}

function Toolbar6() {
  return (
    <div
      style={{ padding: 5, background: "#aaa", marginTop: 5 }}
      onClick={function () {
        alert("You clicked on the toolbar!");
      }}
    >
      <ButtonWithStopPropagation
        onClick={function () {
          alert("Playing!");
        }}
      >
        Play Movie
      </ButtonWithStopPropagation>
      <ButtonWithStopPropagation
        onClick={function () {
          alert("Uploading!");
        }}
      >
        Upload Image
      </ButtonWithStopPropagation>
    </div>
  );
}

/**
 * If you want to prevent an event from reaching parent components,
 * you need to call e.stopPropagation() like this Button component does:
 *
 */
function ButtonWithStopPropagation({ onClick, children }) {
  return (
    <button
      style={{ margin: 5 }}
      onClick={function (e) {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function Toolbar5() {
  return (
    <div
      style={{ padding: 5, background: "#aaa", marginTop: 5 }}
      onClick={function () {
        alert("You clicked on the toolbar!");
      }}
    >
      <button
        style={{ margin: 5 }}
        onClick={function () {
          alert("Playing!");
        }}
      >
        Play Movie
      </button>
      <button
        style={{ margin: 5 }}
        onClick={function () {
          alert("Uploading!");
        }}
      >
        Upload Image
      </button>
    </div>
  );
}

function Toolbar4({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Toolbar3() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}

function UploadButton() {
  return (
    <Button
      onClick={function () {
        alert("Uploading");
      }}
    >
      Upload Image
    </Button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function Toolbar2() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
}

function AlertButton({ message, children }) {
  return (
    <button
      onClick={function () {
        alert(message);
      }}
    >
      {children}
    </button>
  );
}

function Button2() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
