import React, { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0); //initialize //add state to component (Properties)

  //setTimeout(() => setCounter(counter + 2), 500); //The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

  const handleClick = () => {
    setCounter(counter + 2);
  };

  const setToZeroHandler = () => setCounter(0);

  const parts = {
    name: " Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using Props to Pass Data",
        exercises: 7,
      },
      {
        name: "State of a Component",
        exercises: 14,
      },
    ],
  };

  const person = [
    {
      name: "ronald",
      year: 1999,
    },
    {
      name: "Joshua",
      year: 1998,
    },
  ];

  const info = {
    name: "ronald",
    year: 1999,
  };

  return (
    <div>
      <button onClick={setToZeroHandler}>zero yeet!!</button>

      <h1>
        <Header parts={parts} />
        <Content parts={parts} />
        <Total info={info} />
        <Arto />

        <Button handleClick={handleClick} />
        <Display counter={counter} />
      </h1>
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>bingbong</button>
    </>
  );
};

const Display = ({ counter }) => {
  return (
    <>
      <h1>Counter = {counter}</h1>
    </>
  );
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello!" + this.name + this.age);
  }
}

const Content = (props) => {
  //render parts
  console.log(props.parts.parts[0].name);
  const person1 = new Person("ronald", 21);
  person1.greet();
  return (
    <div>
      <p>
        {props.parts.parts[0].name} {props.parts.parts[0].exercises}
      </p>
      <p>
        {props.parts.parts[1].name} {props.parts.parts[0].exercises}
      </p>
      <p>
        {props.parts.parts[2].name} {props.parts.parts[0].exercises}
      </p>
      <p></p>
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.parts.name}</h1>
    </div>
  );
};

//obj + method

const Arto = () => {
  const obj = {
    name: "Test",
    greet: function () {
      console.log("hello, this is " + this.name);
    },
  };

  setTimeout(obj.greet.bind(obj), 1000);
  // const refToGreet = obj.greet;

  // refToGreet();
  return <></>;
};

const Total = (props) => {
  //destructuring object / array
  const { name, year } = props.info;

  // const countYear = () => {
  //   const yearNow = new Date().getFullYear();
  //   console.log(yearNow);
  //   const persons = props.persons;
  //   let a, b;
  //   let c = [1, 2, 3, 4, 5];
  //   [a, b] = c;
  //   console.log(a);

  //   console.log(name);

  //   return yearNow - persons.year;
  // };
  console.log(name);
  const countYear = () => new Date().getFullYear() - year;
  //props.info.name
  return (
    <>
      <h1>
        Hi, {name} your age is {countYear()}
      </h1>
    </>
  );
};

export default App;
