import { useState, useReducer, createContext, useContext } from "react";

import { contacts, tasks as initialTasks } from "../../../data/data";

const LevelContext = createContext(0);
const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

let nextId = 3;

export default function Index() {
  return (
    <>
      <Form2 />
      <Form3 />
      <Form />
      <Accordion />
      <Messager2 />
      <Messager />
      <TaskApp2 />
      <Page />
      <TaskApp />
    </>
  );
}

function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={function (e) {
          setText(e.target.value);
        }}
      />
      <button
        onClick={function () {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
}

function TaskList() {}

function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer() {}

function Page() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

function Section({ children }) {
  const level = useContext(LevelContext);

  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

function Heading({ children }) {
  const level = useContext(LevelContext);

  switch (level) {
    case 0:
      throw Error("Heading must be inside a Section!");
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error("Unknown level: " + level);
  }
}

function TaskApp2() {
  const [tasks, dispatch] = useReducer(tasksReducer2, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask2 onAddTask={handleAddTask} />
      <TaskList2
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function TaskList2({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map(function (task) {
        return (
          <li key={task.id}>
            <Task2
              task={task}
              onChange={onChangeTask}
              onDelete={onDeleteTask}
            />
          </li>
        );
      })}
    </ul>
  );
}

function Task2({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={function (e) {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button
          onClick={function () {
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          onClick={function () {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={function (e) {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button
        onClick={function () {
          onDelete(task.id);
        }}
      >
        Delete
      </button>
    </label>
  );
}

function AddTask2({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={function (e) {
          setText(e.target.value);
        }}
      />
      <button
        onClick={function () {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}

function tasksReducer2(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map(function (t) {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter(function (t) {
        return t.id !== action.id;
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

function Messager() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      <ContactList
        contacts={contacts}
        onSelect={function (contact) {
          setTo(contact);
        }}
        selectedContact={to}
      />
      <Chat
        key={to.email}
        contact={to}
      />
    </div>
  );
}

function Chat({ contact }) {
  const [text, setText] = useState("");

  return (
    <section>
      <textarea
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={function (e) {
          setText(e.target.value);
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}

function ContactList({ contacts, onSelect, selectedContact }) {
  return (
    <section>
      <ul>
        {contacts.map(function (contact) {
          return (
            <li key={contact.email}>
              <button
                onClick={function () {
                  onSelect(contact);
                }}
              >
                {contact.name}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Messager2() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      <ContactList2
        contacts={contacts}
        selectedContact={to}
        onSelect={function (contact) {
          setTo(contact);
        }}
      />
      <Chat2 contact={to} />
    </div>
  );
}

function Chat2({ contact }) {
  const [text, setText] = useState("");

  return (
    <section>
      <textarea
        placeholder={"Chat to " + contact.name}
        value={text}
        onChange={function (e) {
          setText(e.target.value);
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}

function ContactList2({ contacts, selectedContact, onSelect }) {
  return (
    <section>
      <ul>
        {contacts.map(function (contact) {
          return (
            <li key={contact.email}>
              <button
                onClick={function () {
                  onSelect(contact);
                }}
              >
                {contact.name}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={function () {
          setActiveIndex(0);
        }}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={function () {
          setActiveIndex(1);
        }}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({ children, title, isActive, onShow }) {
  return (
    <section style={{ padding: 10, border: "1px solid #aaa" }}>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  const fullName = firstName + " " + lastName;

  return (
    <>
      <h2>Let's check you in</h2>
      <label style={{ display: "block", marginBottom: 5 }}>
        First Name:{" "}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label style={{ display: "block", marginBottom: 5 }}>
        Last Name:{" "}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

function Form3() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + " " + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + " " + e.target.value);
  }

  return (
    <>
      <h2>Let's check you in</h2>
      <label style={{ display: "block", marginBottom: 5 }}>
        First Name:{" "}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label style={{ display: "block", marginBottom: 5 }}>
        Last Name:{" "}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

function Form2() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error);
    } finally {
      setAnswer("");
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {error !== null && <p style={{ color: "red" }}>{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 3000);
  });
}
