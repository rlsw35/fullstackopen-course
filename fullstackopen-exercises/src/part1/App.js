import React, { useState } from "react";

const History = ({ allClicks }) => {
  if (allClicks.length !== 0) {
    return <div>button press History : {allClicks.join(" ")}</div>;
  }
  return <div>this app is used to press buttons!</div>;
};

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const [allClicks, setAllClicks] = useState([]); //declare array

  const testClick = (text) => {
    //Event handlers must always be a function or a reference to a function.
    return () => {
      console.log(text);
    };
  };

  const testClick2 = (value) =>
    setClicks({
      ...clicks, //previous state remains the same!
      left: clicks.left + value,
    });

  const handleLeftClick = (value) => {
    // setAllClicks(allClicks.concat("L"));
    return () =>
      setClicks({
        ...clicks, //previous state remains the same!
        left: clicks.left + value,
      });
  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat("R"));
    setClicks({
      ...clicks, //previous state remains the same!
      right: clicks.right + 1,
    });
  };

  console.log(allClicks);
  //   console.log("left : ", clicks.left);
  //   console.log("right : ", clicks.right);
  return (
    <>
      <button onClick={handleLeftClick(100)}>left click</button>
      <p>{clicks.left}</p>
      <button onClick={() => testClick2(1000)}>right click</button>
      <History allClicks={allClicks} />
    </>
  );
};

export default App;
