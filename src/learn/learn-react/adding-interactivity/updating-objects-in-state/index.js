import { useState } from "react";

export default function Index() {
  return (
    <>
      <MovingDot />
      <Form2 />
      <Form3 />
      <Form />
    </>
  );
}

function Form() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    const nextArtwork = { ...person.artwork, title: e.target.value };
    const nextPerson = { ...person, artwork: nextArtwork };
    setPerson(nextPerson);
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  return (
    <>
      <label>
        Name:{" "}
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:{" "}
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:{" "}
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
    </>
  );
}

function Form3() {
  const [person, setPerson] = useState({
    firstName: "Zelito",
    lastName: "Saide",
    email: "zelitosaide@gmail.com",
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <label>
        First Name:{" "}
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:{" "}
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email{" "}
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
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
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
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
