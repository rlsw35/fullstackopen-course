import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setNotes(response.data);
    });
  }, []);

  console.log("NOTES", notes);
  return (
    <div className="test">
      <ul>
        {notes.map((e) => (
          <Note key={e.id} notes={e} />
        ))}
      </ul>
    </div>
  );
};

const Note = ({ notes }) => {
  console.log("NOTES2", notes);
  return (
    <li>
      {notes.content} {notes.date}
    </li>
  );
};
export default App;
