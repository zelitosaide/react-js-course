import { useState } from "react";

export default function Index() {
  return (
    <>
      <MovingDot />
      <Form2 />
    </>
  );
}

function Form() {
  const [person, setPerson] = useState({
    firstName: "Zelito",
    lastName: "Saide",
    email: "zelitosaide@gmail.com",
  });
}

function Form2() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person, // Copy the old fields
      firstName: e.target.value, // But override this one
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person, // Copy the old fields
      lastName: e.target.value, // But override this one
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person, // Copy the old fields
      email: e.target.value, // But override this one
    });
  }

  return (
    <>
      <label>
        First Name:{" "}
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last Name:{" "}
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email{" "}
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
    </>
  );
}

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
      onPointerMove={function (e) {
        // const nextPosition = {};
        // nextPosition.x = e.clientX;
        // nextPosition.y = e.clientY;
        // setPosition(nextPosition);

        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
    >
      <div
        style={{
          position: "absolute",
          background: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
