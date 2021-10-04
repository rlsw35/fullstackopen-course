import React, { useState } from "react";
import Collections from "./Collections";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <div>
      {/* <RenderCollections /> */}

      {/* exercise 2.1-2.5 */}
      <TestingReduce />
    </div>
  );
};

const Form = ({ noteProp }) => {
  const [notes, setNotesy] = useState(noteProp);
  const [newNote, setNewNote] = useState("my note");
  const [showAll, setShowAll] = useState(true);
  console.log(notes);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotesy(notes.concat(noteObject));
    setNewNote(" ");
  };

  const handleNoteChange = (event) => {
    console.log("event target value", event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <form onSubmit={addNote}>
        <input onChange={handleNoteChange} />
        <button type="submit">save now</button>
        <button
          onClick={() => (!showAll ? setShowAll(true) : setShowAll(false))}
        >
          show {showAll ? "important only" : "all"}
        </button>
      </form>
      <h1>new notes</h1>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

const TestingReduce = () => {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true,
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      date: "2019-05-30T18:39:34.091Z",
      important: false,
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true,
    },
  ];

  return (
    <div>
      <Form noteProp={notes} />
      {/* <CourseDisplay course={course} /> */}
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>

      <ul>
        {course.map((e) => (
          <div>
            <Header e={e} />
            <Part e={e} />
            <br />
            <TotalExercise e={e} />
          </div>
        ))}
      </ul>
    </div>
  );
};

const Header = ({ e }) => {
  return (
    <div className="a">
      <h1> {e.name}</h1>
    </div>
  );
};

const Part = ({ e }) => {
  return (
    <>
      {e.parts.map((e) => (
        <li key={e.id}>
          {e.name} {e.exercises}{" "}
        </li>
      ))}
    </>
  );
};

const TotalExercise = ({ e }) => {
  const myArray = [];
  const reducer = (pv, nv) => pv + nv;
  e.parts.map((c) => myArray.push(c.exercises));
  return "Total " + myArray.reduce(reducer);
};

const Note = ({ note }) => (
  <li>
    {note.id} {note.content}
  </li>
);

const RenderCollections = () => {
  const notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true,
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      date: "2019-05-30T18:39:34.091Z",
      important: false,
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true,
    },
  ];

  return (
    <div>
      <Collections notes={notes} />
    </div>
  );
};

export default App;
