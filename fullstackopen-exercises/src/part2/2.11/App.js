import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const pObj = [
    {
      name: "ronald",
      age: 22,
    },
  ];
  const [persons, setPersons] = useState(pObj);
  const [newContact, setNewContact] = useState("new contact");
  const [newNumber, setNewNumber] = useState("new number");
  const [emptyCol, setEmptyCol] = useState(true);
  const [filteredPersons, setFilteredPersons] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);
  const handleNameOnChange = (event) => {
    setNewContact(event.target.value);
  };
  const handleNumOnChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilter = (event) => {
    setFilteredPersons(persons.filter((e) => e.name === event.target.value));
    console.log("Filtered Persons", filteredPersons);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const personObj = {
      name: newContact,
      number: newNumber,
      date: new Date().toISOString(),
    };

    if (newContact !== "") {
      if (persons.some((e) => e.name.includes(newContact))) {
        window.alert(newContact + " is an existing contact");
      } else {
        setEmptyCol(false);
        setPersons(persons.concat(personObj));
      }
    } else {
      setEmptyCol(true);
      window.alert("Empty name added.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Phonebook</h2>
        Name:<input onChange={handleNameOnChange}></input>
        Number :<input onChange={handleNumOnChange}></input>
        <button type="submit">save now</button>
      </form>
      Filter: <input onChange={handleFilter} />
      <h2>Phonebook</h2>
      <ul>
        {persons.map((e) => (
          <Phonebook persons={e} />
        ))}
      </ul>
      <h2>Filtered Phonebook </h2>
      <ul>
        {filteredPersons.map((e) => (
          <Phonebook persons={e} />
        ))}
      </ul>
    </div>
  );
};

const Phonebook = ({ persons }) => {
  return (
    <div>
      <li>
        {persons.name} {persons.date} {persons.number}
      </li>
    </div>
  );
};

export default App;
